import type { QuestionKind } from "@/lib/units";

function light(raw: string): string {
  return raw.normalize("NFKC").trim().toLowerCase().replace(/\s+/g, "");
}

const UNIT_TAIL =
  /(ヘクトパスカル|パスカル|hpa|pa|km|kg|cm²|cm2|m²|m2|g\/m³|g\/m3|％|%|℃|°c|度|n|g|m)$/i;

function stripUnits(raw: string): string {
  let text = light(raw)
    .replace(/[。．、,，]/g, "")
    .replace(/[〜～~∼ー−–—]/g, "-")
    .replace(/から/g, "-")
    .replace(/約/g, "");
  for (let i = 0; i < 3; i += 1) {
    const next = text.replace(UNIT_TAIL, "");
    if (next === text) break;
    text = next;
  }
  return text;
}

function parseNum(raw: string): number | null {
  const text = stripUnits(raw);
  if (!/^-?\d+(\.\d+)?$/.test(text)) return null;
  const value = Number(text);
  return Number.isFinite(value) ? value : null;
}

export function choiceMatches(choice: string, answer: string): boolean {
  return light(choice) === light(answer);
}

export function inputMatches(answer: string, accept: string[], raw: string): boolean {
  const got = stripUnits(raw);
  if (!got) return false;
  const keys = [answer, ...accept].map(stripUnits).filter(Boolean);
  if (keys.includes(got)) return true;
  const given = parseNum(raw);
  if (given === null) return false;
  return [answer, ...accept].some((key) => {
    const expected = parseNum(key);
    return expected !== null && Object.is(expected, given);
  });
}

export function isCorrect(
  question: { kind: QuestionKind; answer: string; accept: string[] },
  raw: string,
): boolean {
  if (question.kind === "choice") return choiceMatches(raw, question.answer);
  return inputMatches(question.answer, question.accept, raw);
}
