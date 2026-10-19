import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as UNIT_IDS, c as unitTitle, n as ANGLES, r as FIGURE_IDS, t as ALLOWED_FIGURES } from "./units-DvxRAVSI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz.functions-MO2WKK49.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var FIGURE_SET = new Set(FIGURE_IDS);
function asUnitId(value) {
	return UNIT_IDS.includes(value) ? value : null;
}
function parseInput(input) {
	if (!input || typeof input !== "object") throw new Error("入力が不正です");
	const raw = input;
	const unitId = typeof raw.unitId === "string" ? asUnitId(raw.unitId) : null;
	if (!unitId) throw new Error("単元が不正です");
	return {
		unitId,
		kind: raw.kind === "choice" || raw.kind === "input" || raw.kind === "either" ? raw.kind : "either",
		angle: typeof raw.angle === "string" && ANGLES.includes(raw.angle) ? raw.angle : ANGLES[0],
		recentPrompts: Array.isArray(raw.recentPrompts) ? raw.recentPrompts.filter((item) => typeof item === "string").map((item) => item.replace(/\s+/g, " ").trim().slice(0, 180)).filter(Boolean).slice(-8) : []
	};
}
function extractJson(text) {
	const body = text.match(/```(?:json)?\s*([\s\S]*?)```/)?.[1] ?? text;
	const start = body.indexOf("{");
	const end = body.lastIndexOf("}");
	if (start < 0 || end <= start) throw new Error("JSONがありません");
	return JSON.parse(body.slice(start, end + 1));
}
function shuffle(items) {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const swap = next[i];
		next[i] = next[j];
		next[j] = swap;
	}
	return next;
}
var FIGURE_HINT = {
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
	foehn: /山|フェーン|断熱|標高|風下|気温|山頂/
};
function reconcileFigure(figure, prompt, unitId) {
	if (figure === "none") return "none";
	if (!ALLOWED_FIGURES[unitId].includes(figure)) return "none";
	const hint = FIGURE_HINT[figure];
	if (hint && !hint.test(prompt)) return "none";
	return figure;
}
function givesAway(prompt, answer) {
	if (/^\d+(\.\d+)?$/.test(answer)) {
		const body = answer.replace(".", "\\.");
		return new RegExp(`(?<![\\d.])${body}(?![\\d.])`).test(prompt);
	}
	return answer.length >= 3 && prompt.includes(answer);
}
function similar(prompt, previous) {
	if (prompt === previous) return true;
	const head = previous.slice(0, 22);
	return head.length >= 12 && prompt.includes(head);
}
function toQuestion(raw, input) {
	if (!raw || typeof raw !== "object") return null;
	const row = raw;
	if (row.kind !== "choice" && row.kind !== "input") return null;
	const kind = row.kind;
	if (input.kind !== "either" && kind !== input.kind) return null;
	const prompt = typeof row.prompt === "string" ? row.prompt.trim() : "";
	const explanation = typeof row.explanation === "string" ? row.explanation.trim() : "";
	const answer = typeof row.answer === "string" ? row.answer.trim() : "";
	if (prompt.length < 8 || prompt.length > 420) return null;
	if (explanation.length < 8 || explanation.length > 420) return null;
	if (!answer || answer.length > 80) return null;
	if (input.recentPrompts.some((recent) => similar(prompt, recent))) return null;
	if (givesAway(prompt, answer)) return null;
	const figure = reconcileFigure(typeof row.figure === "string" && FIGURE_SET.has(row.figure) ? row.figure : "none", prompt, input.unitId);
	if (kind === "choice") {
		if (!Array.isArray(row.choices)) return null;
		const choices = row.choices.filter((choice) => typeof choice === "string").map((choice) => choice.trim()).filter(Boolean);
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
			source: "ai"
		};
	}
	if (answer.length > 32) return null;
	const accept = Array.isArray(row.accept) ? row.accept.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean).slice(0, 8) : [];
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
		source: "ai"
	};
}
async function callModel(apiKey, system, user) {
	const response = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		signal: AbortSignal.timeout(28e3),
		body: JSON.stringify({
			model: "grok-4.5",
			temperature: .7,
			max_tokens: 1400,
			response_format: { type: "json_object" },
			messages: [{
				role: "system",
				content: system
			}, {
				role: "user",
				content: user
			}]
		})
	});
	if (!response.ok) {
		console.error(`xAI API error ${response.status}`);
		return null;
	}
	return (await response.json()).choices?.[0]?.message?.content ?? null;
}
function readQuestion(text, input) {
	if (!text) return null;
	try {
		return toQuestion(extractJson(text), input);
	} catch (error) {
		console.error(error);
		return null;
	}
}
var generateQuestion_createServerFn_handler = createServerRpc({
	id: "06207a84c69a24c1d67489fcde9ce658ff828738ee1251b61458ce41c8053e7a",
	name: "generateQuestion",
	filename: "src/lib/quiz.functions.ts"
}, (opts) => generateQuestion.__executeServer(opts));
var generateQuestion = createServerFn({ method: "POST" }).validator(parseInput).handler(generateQuestion_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AIを利用できません"
	};
	const { SYSTEM_PROMPT, buildUserPrompt } = await import("./source-BwrK6l5j.mjs");
	const user = buildUserPrompt(data);
	let first = null;
	let transportFailed = false;
	try {
		first = await callModel(apiKey, SYSTEM_PROMPT, user);
	} catch (error) {
		console.error(error);
		transportFailed = true;
	}
	const parsed = readQuestion(first, data);
	if (parsed) return {
		ok: true,
		question: parsed
	};
	if (transportFailed) return {
		ok: false,
		error: "問題を作れませんでした"
	};
	try {
		const retry = readQuestion(await callModel(apiKey, SYSTEM_PROMPT, `${user}\n直前の出力は使えませんでした。指定したキーだけのJSONを1つだけ返してください。`), data);
		if (retry) return {
			ok: true,
			question: retry
		};
	} catch (error) {
		console.error(error);
	}
	return {
		ok: false,
		error: "問題を作れませんでした"
	};
});
//#endregion
export { generateQuestion_createServerFn_handler };
