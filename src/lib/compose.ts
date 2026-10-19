import { pickBank } from "@/lib/bank";
import type { GenInput, QuestionKind, QuizQuestion, UnitId } from "@/lib/units";
import { unitTitle } from "@/lib/units";

function uid(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

function num(value: number): string {
  const rounded = Math.round(value * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}

function asQuestion(input: {
  unitId: UnitId;
  kind: QuestionKind;
  prompt: string;
  answer: string;
  accept?: string[];
  choices?: string[];
  explanation: string;
}): QuizQuestion {
  return {
    id: uid("local"),
    unitId: input.unitId,
    unitTitle: unitTitle(input.unitId),
    kind: input.kind,
    prompt: input.prompt,
    choices: input.kind === "choice" ? input.choices ?? [] : [],
    answer: input.answer,
    accept: input.accept ?? [],
    explanation: input.explanation,
    figure: "none",
    source: "bank",
  };
}

function numericChoices(correct: number, unit: string): { choices: string[]; answer: string } {
  const decoys = [correct * 2, correct / 2, correct + 10, correct + 5, correct - 5, correct * 10]
    .map((value) => Math.round(value * 100) / 100)
    .filter((value) => value > 0 && value !== correct);
  const unique = [...new Set(decoys.map(num))].filter((value) => value !== num(correct));
  const answer = `${num(correct)}${unit}`;
  const choices = [answer, ...unique.slice(0, 3).map((value) => `${value}${unit}`)];
  while (choices.length < 4) choices.push(`${num(correct + choices.length * 3)}${unit}`);
  return { choices: choices.slice(0, 4), answer };
}

function pressureQuestion(kind: QuestionKind): QuizQuestion {
  const force = pick([20, 40, 60, 80, 100, 200, 250, 300, 400, 500]);
  const area = pick([0.5, 1, 2, 4, 5, 8]);
  const pressure = force / area;
  const ask = pick(["pressure", "force", "area"] as const);
  if (ask === "pressure") {
    const explanation = `圧力は力÷面積です。${num(force)}÷${num(area)}=${num(pressure)}Paです。`;
    if (kind === "input") {
      return asQuestion({
        unitId: "pressure",
        kind,
        prompt: `力${num(force)}Nが、面積${num(area)}m²に働いています。圧力は何Paですか。数字だけ答えてください。`,
        answer: num(pressure),
        explanation,
      });
    }
    const packed = numericChoices(pressure, "Pa");
    return asQuestion({
      unitId: "pressure",
      kind: "choice",
      prompt: `力${num(force)}Nが、面積${num(area)}m²に働くときの圧力はどれですか。`,
      answer: packed.answer,
      choices: packed.choices,
      explanation,
    });
  }
  if (ask === "force") {
    const explanation = `力は圧力×面積です。${num(pressure)}×${num(area)}=${num(force)}Nです。`;
    if (kind === "input") {
      return asQuestion({
        unitId: "pressure",
        kind,
        prompt: `圧力${num(pressure)}Paで、面積が${num(area)}m²のとき、力は何Nですか。数字だけ答えてください。`,
        answer: num(force),
        explanation,
      });
    }
    const packed = numericChoices(force, "N");
    return asQuestion({
      unitId: "pressure",
      kind: "choice",
      prompt: `圧力${num(pressure)}Pa、面積${num(area)}m²のとき、力はどれですか。`,
      answer: packed.answer,
      choices: packed.choices,
      explanation,
    });
  }
  const explanation = `面積は力÷圧力です。${num(force)}÷${num(pressure)}=${num(area)}m²です。`;
  if (kind === "input") {
    return asQuestion({
      unitId: "pressure",
      kind,
      prompt: `力${num(force)}Nで圧力が${num(pressure)}Paのとき、面積は何m²ですか。数字だけ答えてください。`,
      answer: num(area),
      explanation,
    });
  }
  const packed = numericChoices(area, "m²");
  return asQuestion({
    unitId: "pressure",
    kind: "choice",
    prompt: `力${num(force)}N、圧力${num(pressure)}Paのとき、面積はどれですか。`,
    answer: packed.answer,
    choices: packed.choices,
    explanation,
  });
}

const FOEHN = [
  { t0: 25, cloud: 1500, top: 2500 },
  { t0: 25, cloud: 1000, top: 3000 },
  { t0: 20, cloud: 1000, top: 2000 },
  { t0: 30, cloud: 2000, top: 3000 },
  { t0: 18, cloud: 800, top: 2000 },
  { t0: 28, cloud: 800, top: 1600 },
] as const;

function foehnQuestion(kind: QuestionKind): QuizQuestion {
  const scene = pick(FOEHN);
  const tCloud = scene.t0 - scene.cloud / 100;
  const tTop = tCloud - ((scene.top - scene.cloud) / 100) * 0.5;
  const tLee = tTop + scene.top / 100;
  const ask = pick(["cloud", "rh", "top", "lee"] as const);
  const setup = `標高0mで、まだ飽和していない${scene.t0}℃の空気が山を越えます。${scene.cloud}mで雲ができ、降水しながら${scene.top}mの山頂まで昇り、その後は雲が消えて標高0mまで下ります。`;
  if (ask === "rh") {
    return asQuestion({
      unitId: "foehn",
      kind: "input",
      prompt: `${setup}雲ができ始める地点の相対湿度は何%ですか。数字だけ答えてください。`,
      answer: "100",
      accept: ["１００"],
      explanation: "雲ができ始める高さは、水蒸気がちょうど飽和した凝結高度です。相対湿度は100%です。",
    });
  }
  const target = ask === "cloud" ? tCloud : ask === "top" ? tTop : tLee;
  const place =
    ask === "cloud" ? `${scene.cloud}m地点の気温` : ask === "top" ? "山頂の気温" : "風下の標高0mの気温";
  const explanation =
    ask === "cloud"
      ? `雲ができるまでは乾燥断熱減率で、100mにつき1℃下がります。${scene.t0}−${scene.cloud / 100}=${num(tCloud)}℃です。`
      : ask === "top"
        ? `${scene.cloud}mまでは${num(tCloud)}℃。そこから山頂までは湿潤断熱減率で、100mにつき0.5℃下がります。${num(tCloud)}−${num(((scene.top - scene.cloud) / 100) * 0.5)}=${num(tTop)}℃です。`
        : `山頂は${num(tTop)}℃。下降中は雲がないので、100mにつき1℃上がります。${num(tTop)}+${scene.top / 100}=${num(tLee)}℃です。`;
  if (kind === "input" || ask === "lee") {
    return asQuestion({
      unitId: "foehn",
      kind: "input",
      prompt: `${setup}${place}は何℃ですか。数字だけ答えてください。`,
      answer: num(target),
      explanation,
    });
  }
  const packed = numericChoices(target, "℃");
  return asQuestion({
    unitId: "foehn",
    kind: "choice",
    prompt: `${setup}${place}はどれですか。`,
    answer: packed.answer,
    choices: packed.choices,
    explanation,
  });
}

function vaporQuestion(kind: QuestionKind): QuizQuestion {
  const form = pick(["rh50-30", "rh100-20", "drop", "rh50-10"] as const);
  if (form === "drop") {
    return asQuestion({
      unitId: "vapor",
      kind: "input",
      prompt:
        "1m³の空気が20℃で飽和しています。飽和水蒸気量は17.3g/m³です。これを10℃まで冷やすと、水滴は何gできますか。10℃の飽和水蒸気量は9.4g/m³です。数字だけ答えてください。",
      answer: "7.9",
      accept: ["７．９", "7.90"],
      explanation: "含めきれなくなった分が水滴になります。17.3−9.4=7.9gです。",
    });
  }
  if (form === "rh100-20") {
    return asQuestion({
      unitId: "vapor",
      kind,
      prompt:
        kind === "input"
          ? "20℃の飽和水蒸気量は17.3g/m³です。空気1m³に17.3gの水蒸気があるとき、相対湿度は何%ですか。数字だけ答えてください。"
          : "20℃の飽和水蒸気量は17.3g/m³です。空気1m³に17.3gの水蒸気があるとき、相対湿度はどれですか。",
      answer: kind === "input" ? "100" : "100%",
      accept: kind === "input" ? ["１００"] : [],
      choices: kind === "choice" ? ["100%", "50%", "17.3%", "20%"] : [],
      explanation: "相対湿度は、実際の水蒸気量÷飽和水蒸気量×100です。17.3÷17.3×100=100%です。",
    });
  }
  if (form === "rh50-30") {
    return asQuestion({
      unitId: "vapor",
      kind,
      prompt:
        kind === "input"
          ? "30℃の飽和水蒸気量は30.4g/m³です。実際の水蒸気量が15.2g/m³のとき、相対湿度は何%ですか。数字だけ答えてください。"
          : "30℃の飽和水蒸気量は30.4g/m³、実際の水蒸気量が15.2g/m³のとき、相対湿度はどれですか。",
      answer: kind === "input" ? "50" : "50%",
      accept: kind === "input" ? ["５０"] : [],
      choices: kind === "choice" ? ["50%", "15.2%", "30%", "100%"] : [],
      explanation: "15.2÷30.4×100=50%です。気温が高いと飽和水蒸気量も大きくなります。",
    });
  }
  return asQuestion({
    unitId: "vapor",
    kind: "input",
    prompt:
      "10℃の飽和水蒸気量は9.4g/m³です。実際に4.7g/m³の水蒸気を含むとき、相対湿度は何%ですか。数字だけ答えてください。",
    answer: "50",
    accept: ["５０"],
    explanation: "4.7÷9.4×100=50%です。",
  });
}

function lapseQuestion(): QuizQuestion {
  const wet = Math.random() < 0.5;
  const hundreds = wet ? pick([4, 6, 8, 10, 12, 20]) : pick([3, 4, 7, 9, 12, 15]);
  const height = hundreds * 100;
  const drop = wet ? hundreds * 0.5 : hundreds;
  return asQuestion({
    unitId: wet ? "foehn" : "cloud",
    kind: "input",
    prompt: wet
      ? `水蒸気が飽和している空気が、${height}m上昇します。気温は約何℃下がりますか。数字だけ答えてください。`
      : `水蒸気が飽和していない空気が、${height}m上昇します。気温は約何℃下がりますか。数字だけ答えてください。`,
    answer: num(drop),
    explanation: wet
      ? `飽和しているときは湿潤断熱減率で、100mにつき0.5℃下がります。${hundreds}×0.5=${num(drop)}℃です。`
      : `飽和していないときは乾燥断熱減率で、100mにつき1℃下がります。${height}mなら${num(drop)}℃です。`,
  });
}

function synthesize(kind: QuestionKind, unitId: UnitId): QuizQuestion | null {
  if (unitId === "pressure") return pressureQuestion(kind === "either" ? "input" : kind);
  if (unitId === "foehn") return Math.random() < 0.7 ? foehnQuestion(kind === "choice" ? "choice" : "input") : lapseQuestion();
  if (unitId === "vapor") return vaporQuestion(kind === "choice" ? "choice" : "input");
  if (unitId === "cloud" && kind !== "choice") return lapseQuestion();
  return null;
}

export function localQuestion(plan: GenInput): QuizQuestion {
  const recent = new Set(plan.recentPrompts);
  const made = (() => {
    for (let i = 0; i < 6; i += 1) {
      const kind = plan.kind === "either" ? (Math.random() < 0.5 ? "choice" : "input") : plan.kind;
      const next = synthesize(kind, plan.unitId);
      if (next && !recent.has(next.prompt)) return next;
    }
    return null;
  })();
  const bank = pickBank(plan);
  if (made && (!recent.has(bank.prompt) ? Math.random() < 0.55 : true)) return made;
  if (!recent.has(bank.prompt)) return bank;
  return made ?? bank;
}
