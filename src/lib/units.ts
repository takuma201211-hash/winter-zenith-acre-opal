export const UNITS = [
  { id: "fossil-what", title: "化石とは" },
  { id: "facies", title: "示相化石" },
  { id: "index", title: "示準化石" },
  { id: "correlate", title: "柱状図と鍵層" },
  { id: "deform", title: "しゅう曲と断層" },
  { id: "unconformity", title: "不整合" },
  { id: "heat", title: "熱収支と太陽高度" },
  { id: "air", title: "大気の成分と構造" },
  { id: "pressure", title: "圧力と大気圧" },
  { id: "wind", title: "風・海陸風・季節風" },
  { id: "circ", title: "大気の大循環" },
  { id: "vapor", title: "水蒸気と湿度" },
  { id: "cloud", title: "雲と上昇気流" },
  { id: "foehn", title: "フェーン現象" },
] as const;

export type UnitId = (typeof UNITS)[number]["id"];

export const UNIT_IDS = UNITS.map((unit) => unit.id) as UnitId[];

export function unitTitle(id: string): string {
  return UNITS.find((unit) => unit.id === id)?.title ?? "理科";
}

export const FIGURE_IDS = [
  "none",
  "columnar",
  "faults",
  "fold",
  "unconformity",
  "contacts",
  "section",
  "solar",
  "atmosphere",
  "pressure",
  "breeze",
  "circulation",
  "saturation",
  "clouds",
  "foehn",
] as const;

export type FigureId = (typeof FIGURE_IDS)[number];

export const ALLOWED_FIGURES: Record<UnitId, readonly FigureId[]> = {
  "fossil-what": ["none"],
  facies: ["none"],
  index: ["none"],
  correlate: ["none", "columnar"],
  deform: ["none", "faults", "fold", "section"],
  unconformity: ["none", "unconformity", "contacts", "section"],
  heat: ["none", "solar"],
  air: ["none", "atmosphere"],
  pressure: ["none", "pressure"],
  wind: ["none", "breeze"],
  circ: ["none", "circulation"],
  vapor: ["none", "saturation"],
  cloud: ["none", "clouds"],
  foehn: ["none", "foehn"],
};

export const ANGLES = [
  "用語の意味",
  "具体例",
  "整数で終わる計算",
  "比べる",
  "原因と仕組み",
  "図の読み取り",
  "プリントの数値",
] as const;

export type QuestionKind = "choice" | "input";

export type QuizQuestion = {
  id: string;
  unitId: UnitId;
  unitTitle: string;
  kind: QuestionKind;
  prompt: string;
  choices: string[];
  answer: string;
  accept: string[];
  explanation: string;
  figure: FigureId;
  source: "ai" | "bank";
};

export type GenInput = {
  unitId: UnitId;
  kind: QuestionKind | "either";
  angle: string;
  recentPrompts: string[];
};

export function pickUnit(counts: Partial<Record<UnitId, number>>, prev?: string): UnitId {
  let best: UnitId = UNITS[0].id;
  let bestScore = Number.POSITIVE_INFINITY;
  for (const unit of UNITS) {
    const seen = counts[unit.id] ?? 0;
    const score = seen + (unit.id === prev ? 0.45 : 0);
    if (score < bestScore) {
      bestScore = score;
      best = unit.id;
    }
  }
  return best;
}

export function pickKind(history: QuestionKind[]): QuestionKind | "either" {
  const a = history.at(-1);
  const b = history.at(-2);
  const c = history.at(-3);
  if (a === "choice" && b === "choice" && c === "choice") return "input";
  if (a === "input" && b === "input") return "choice";
  return "either";
}
