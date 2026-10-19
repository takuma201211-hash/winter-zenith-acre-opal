//#region node_modules/.nitro/vite/services/ssr/assets/units-DvxRAVSI.js
var UNITS = [
	{
		id: "fossil-what",
		title: "化石とは"
	},
	{
		id: "facies",
		title: "示相化石"
	},
	{
		id: "index",
		title: "示準化石"
	},
	{
		id: "correlate",
		title: "柱状図と鍵層"
	},
	{
		id: "deform",
		title: "しゅう曲と断層"
	},
	{
		id: "unconformity",
		title: "不整合"
	},
	{
		id: "heat",
		title: "熱収支と太陽高度"
	},
	{
		id: "air",
		title: "大気の成分と構造"
	},
	{
		id: "pressure",
		title: "圧力と大気圧"
	},
	{
		id: "wind",
		title: "風・海陸風・季節風"
	},
	{
		id: "circ",
		title: "大気の大循環"
	},
	{
		id: "vapor",
		title: "水蒸気と湿度"
	},
	{
		id: "cloud",
		title: "雲と上昇気流"
	},
	{
		id: "foehn",
		title: "フェーン現象"
	}
];
var UNIT_IDS = UNITS.map((unit) => unit.id);
function unitTitle(id) {
	return UNITS.find((unit) => unit.id === id)?.title ?? "理科";
}
var FIGURE_IDS = [
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
	"foehn"
];
var ALLOWED_FIGURES = {
	"fossil-what": ["none"],
	facies: ["none"],
	index: ["none"],
	correlate: ["none", "columnar"],
	deform: [
		"none",
		"faults",
		"fold",
		"section"
	],
	unconformity: [
		"none",
		"unconformity",
		"contacts",
		"section"
	],
	heat: ["none", "solar"],
	air: ["none", "atmosphere"],
	pressure: ["none", "pressure"],
	wind: ["none", "breeze"],
	circ: ["none", "circulation"],
	vapor: ["none", "saturation"],
	cloud: ["none", "clouds"],
	foehn: ["none", "foehn"]
};
var ANGLES = [
	"用語の意味",
	"具体例",
	"整数で終わる計算",
	"比べる",
	"原因と仕組み",
	"図の読み取り",
	"プリントの数値"
];
function pickUnit(counts, prev) {
	let best = UNITS[0].id;
	let bestScore = Number.POSITIVE_INFINITY;
	for (const unit of UNITS) {
		const score = (counts[unit.id] ?? 0) + (unit.id === prev ? .45 : 0);
		if (score < bestScore) {
			bestScore = score;
			best = unit.id;
		}
	}
	return best;
}
function pickKind(history) {
	const a = history.at(-1);
	const b = history.at(-2);
	const c = history.at(-3);
	if (a === "choice" && b === "choice" && c === "choice") return "input";
	if (a === "input" && b === "input") return "choice";
	return "either";
}
//#endregion
export { UNIT_IDS as a, unitTitle as c, UNITS as i, ANGLES as n, pickKind as o, FIGURE_IDS as r, pickUnit as s, ALLOWED_FIGURES as t };
