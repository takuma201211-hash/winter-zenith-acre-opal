import { createServerFn } from "@tanstack/react-start";
import {
  ALLOWED_FIGURES,
  ANGLES,
  FIGURE_IDS,
  UNIT_IDS,
  type FigureId,
  type GenInput,
  type QuestionKind,
  type QuizQuestion,
  type UnitId,
  unitTitle,
} from "@/lib/units";

export type GenerateResult =
  | { ok: true; question: QuizQuestion }
  | { ok: false; error: string };

const FIGURE_SET = new Set<string>(FIGURE_IDS);

function asUnitId(value: string): UnitId | null {
  return UNIT_IDS.includes(value as UnitId) ? (value as UnitId) : null;
}

function parseInput(input: unknown): GenInput {
  if (!input || typeof input !== "object") throw new Error("入力が不正です");
  const raw = input as Record<string, unknown>;
  const unitId = typeof raw.unitId === "string" ? asUnitId(raw.unitId) : null;
  if (!unitId) throw new Error("単元が不正です");
  const kind =
    raw.kind === "choice" || raw.kind === "input" || raw.kind === "either" ? raw.kind : "either";
  const angle =
    typeof raw.angle === "string" && ANGLES.includes(raw.angle as (typeof ANGLES)[number])
      ? raw.angle
      : ANGLES[0];
  const recentPrompts = Array.isArray(raw.recentPrompts)
    ? raw.recentPrompts
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.replace(/\s+/g, " ").trim().slice(0, 180))
        .filter(Boolean)
        .slice(-8)
    : [];
  return { unitId, kind, angle, recentPrompts };
}

function extractJson(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = fenced?.[1] ?? text;
  const start = body.indexOf("{");
  const end = body.lastIndexOf("}");
  if (start < 0 || end <= start) throw new Error("JSONがありません");
  return JSON.parse(body.slice(start, end + 1)) as unknown;
}

function shuffle(items: string[]): string[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = next[i];
    next[i] = next[j]!;
    next[j] = swap!;
  }
  return next;
}

const FIGURE_HINT: Partial<Record<FigureId, RegExp>> = {
  columnar: /柱状|化石|火山灰|地域|鍵|フズリナ|アンモナイト|カヘイ/,
  faults: /断層|上盤|ア|イ|ウ/,
  fold: /曲|力|地層/,
  unconformity: /不整合|隆起|侵食|堆積|段階|①/,
  contacts: /整合|ア|イ|ウ|傾/,
  section: /断面|断層|れき|礫|砂岩|泥岩|A|B|C/,
  solar: /太陽|緯度|赤道|高度|面積/,
  atmosphere: /圏|オゾン|大気|気温|紫外/,
  pressure: /Pa|N|圧力|力|面積|[xyzXYZ]|机/,
  breeze: /風|陸|海|昼|夜/,
  circulation: /風|緯度|赤道|循環|貿易|偏西|ジェット|ハドレー/,
  saturation: /水蒸気|湿度|露点|気温|g/,
  clouds: /雲|上昇|断熱|露点|ア|イ|ウ|エ/,
  foehn: /山|フェーン|断熱|標高|風下|気温|山頂/,
};

function reconcileFigure(figure: FigureId, prompt: string, unitId: UnitId): FigureId {
  if (figure === "none") return "none";
  if (!ALLOWED_FIGURES[unitId].includes(figure)) return "none";
  const hint = FIGURE_HINT[figure];
  if (hint && !hint.test(prompt)) return "none";
  return figure;
}

function givesAway(prompt: string, answer: string): boolean {
  if (/^\d+(\.\d+)?$/.test(answer)) {
    const body = answer.replace(".", "\\.");
    return new RegExp(`(?<![\\d.])${body}(?![\\d.])`).test(prompt);
  }
  return answer.length >= 3 && prompt.includes(answer);
}

function similar(prompt: string, previous: string): boolean {
  if (prompt === previous) return true;
  const head = previous.slice(0, 22);
  return head.length >= 12 && prompt.includes(head);
}

function toQuestion(raw: unknown, input: GenInput): QuizQuestion | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  if (row.kind !== "choice" && row.kind !== "input") return null;
  const kind = row.kind as QuestionKind;
  if (input.kind !== "either" && kind !== input.kind) return null;
  const prompt = typeof row.prompt === "string" ? row.prompt.trim() : "";
  const explanation = typeof row.explanation === "string" ? row.explanation.trim() : "";
  const answer = typeof row.answer === "string" ? row.answer.trim() : "";
  if (prompt.length < 8 || prompt.length > 420) return null;
  if (explanation.length < 8 || explanation.length > 420) return null;
  if (!answer || answer.length > 80) return null;
  if (input.recentPrompts.some((recent) => similar(prompt, recent))) return null;
  if (givesAway(prompt, answer)) return null;

  const requested = typeof row.figure === "string" && FIGURE_SET.has(row.figure) ? (row.figure as FigureId) : "none";
  const figure = reconcileFigure(requested, prompt, input.unitId);

  if (kind === "choice") {
    if (!Array.isArray(row.choices)) return null;
    const choices = row.choices
      .filter((choice): choice is string => typeof choice === "string")
      .map((choice) => choice.trim())
      .filter(Boolean);
    if (choices.length !== 4 || new Set(choices).size !== 4) return null;
    if (choices.some((choice) => choice.length > 90)) return null;
    if (!choices.includes(answer)) return null;
    return {
      id: `ai-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      unitId: input.unitId,
      unitTitle: unitTitle(input.unitId),
      kind,
      prompt,
      choices: shuffle(choices),
      answer,
      accept: [],
      explanation,
      figure,
      source: "ai",
    };
  }

  if (answer.length > 32) return null;
  const accept = Array.isArray(row.accept)
    ? row.accept
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean)
        .slice(0, 8)
    : [];
  return {
    id: `ai-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
    unitId: input.unitId,
    unitTitle: unitTitle(input.unitId),
    kind,
    prompt,
    choices: [],
    answer,
    accept,
    explanation,
    figure,
    source: "ai",
  };
}

type ModelResult = { ok: true; text: string } | { ok: false; status: number };

let aiBlockedUntil = 0;

async function callModel(apiKey: string, system: string, user: string): Promise<ModelResult> {
  const response = await fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    signal: AbortSignal.timeout(28000),
    body: JSON.stringify({
      model: "grok-4.5",
      temperature: 0.7,
      max_tokens: 1400,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  });
  if (!response.ok) {
    console.error(`xAI API error ${response.status}`);
    return { ok: false, status: response.status };
  }
  const body = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  return { ok: true, text: body.choices?.[0]?.message?.content ?? "" };
}

function blockedStatus(status: number): boolean {
  return status === 401 || status === 402 || status === 403;
}

function readQuestion(text: string | null, input: GenInput): QuizQuestion | null {
  if (!text) return null;
  try {
    return toQuestion(extractJson(text), input);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const generateQuestion = createServerFn({ method: "POST" })
  .validator(parseInput)
  .handler(async ({ data }): Promise<GenerateResult> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false, error: "ai-off" };
    if (Date.now() < aiBlockedUntil) return { ok: false, error: "ai-off" };

    const { SYSTEM_PROMPT, buildUserPrompt } = await import("./source");
    const user = buildUserPrompt(data);
    try {
      const first = await callModel(apiKey, SYSTEM_PROMPT, user);
      if (!first.ok) {
        if (blockedStatus(first.status)) {
          aiBlockedUntil = Date.now() + 10 * 60 * 1000;
          return { ok: false, error: "ai-off" };
        }
      } else {
        const parsed = readQuestion(first.text, data);
        if (parsed) return { ok: true, question: parsed };
      }

      const second = await callModel(
        apiKey,
        SYSTEM_PROMPT,
        `${user}\n直前の出力は使えませんでした。指定したキーだけのJSONを1つだけ返してください。`,
      );
      if (!second.ok) {
        if (blockedStatus(second.status)) aiBlockedUntil = Date.now() + 10 * 60 * 1000;
        return { ok: false, error: blockedStatus(second.status) ? "ai-off" : "問題を作れませんでした" };
      }
      const retry = readQuestion(second.text, data);
      if (retry) return { ok: true, question: retry };
    } catch (error) {
      console.error(error);
    }
    return { ok: false, error: "問題を作れませんでした" };
  });
