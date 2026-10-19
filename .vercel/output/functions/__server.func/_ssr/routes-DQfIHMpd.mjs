import { i as __toESM } from "../_runtime.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, d as require_react, i as AlertDialogContent, n as AlertDialogAction, o as AlertDialogOverlay, r as AlertDialogCancel, s as AlertDialogPortal, t as AlertDialog, u as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as UNIT_IDS, c as unitTitle, i as UNITS, n as ANGLES, o as pickKind, s as pickUnit } from "./units-DvxRAVSI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DQfIHMpd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Frame({ children, viewBox, caption }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "m-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox,
			className: "h-auto w-full text-foreground",
			role: "img",
			"aria-label": caption,
			style: { fontFamily: "inherit" },
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-xs text-muted",
			children: caption
		})]
	});
}
function Columnar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 250",
		caption: "A地域とB地域の柱状図",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "70",
				y: "22",
				textAnchor: "middle",
				fontSize: "13",
				children: "A地域"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "270",
				y: "22",
				textAnchor: "middle",
				fontSize: "13",
				children: "B地域"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "32",
				width: "64",
				height: "26",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "238",
				y: "32",
				width: "64",
				height: "26",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 45 H238",
				stroke: "var(--color-accent)",
				strokeDasharray: "4 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "171",
				y: "40",
				textAnchor: "middle",
				fontSize: "10",
				fill: "var(--color-accent)",
				children: "同じ鉱物の火山灰"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "58",
				width: "64",
				height: "34",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "238",
				y: "58",
				width: "64",
				height: "34",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "112",
				y: "80",
				fontSize: "11",
				children: "砂"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "308",
				y: "80",
				fontSize: "11",
				children: "砂"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "92",
				width: "64",
				height: "46",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "238",
				y: "92",
				width: "64",
				height: "36",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "112",
				y: "118",
				fontSize: "11",
				children: "カヘイ石"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "308",
				y: "114",
				fontSize: "11",
				children: "カヘイ石"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "238",
				y: "128",
				width: "64",
				height: "40",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "308",
				y: "152",
				fontSize: "11",
				children: "アンモナイト"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "138",
				width: "64",
				height: "70",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "238",
				y: "168",
				width: "64",
				height: "40",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "112",
				y: "178",
				fontSize: "11",
				children: "フズリナ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "308",
				y: "192",
				fontSize: "11",
				children: "フズリナ"
			})
		]
	});
}
function Faults() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 150",
		caption: "ア・イ・ウのずれ方",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M18 48 H68 V96 H18 Z",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M68 72 H118 V120 H68 Z",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M68 48 V72",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 78 V104",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M84 96 L90 108 L96 96",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "68",
				y: "142",
				textAnchor: "middle",
				fontSize: "14",
				children: "ア"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M150 78 H200 V126 H150 Z",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M200 42 H250 V90 H200 Z",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M200 78 V90",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M222 78 V52",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M216 60 L222 46 L228 60",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "200",
				y: "142",
				textAnchor: "middle",
				fontSize: "14",
				children: "イ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M278 58 H318 V102 H278 Z",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M318 58 H358 V102 H318 Z",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M292 72 H330",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M318 88 H280",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M322 66 L334 72 L322 78",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M308 82 L296 88 L308 94",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "318",
				y: "142",
				textAnchor: "middle",
				fontSize: "14",
				children: "ウ"
			})
		]
	});
}
function Fold() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 150",
		caption: "横から力を受けて曲がった地層",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 78 H90",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M78 70 L90 78 L78 86",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M320 78 H270",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M282 70 L270 78 L282 86",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 48 C120 48 130 100 180 100 C230 100 240 48 290 48",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 66 C120 66 140 112 180 112 C220 112 240 66 290 66",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 82 C120 82 145 122 180 122 C215 122 240 82 290 82",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "4"
			})
		]
	});
}
function Unconformity() {
	const panel = (x, y, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${x} ${y})`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "150",
			height: "78",
			fill: "var(--color-card)",
			stroke: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "12",
			y: "18",
			fontSize: "13",
			children: n
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 200",
		caption: "不整合面ができる順",
		children: [
			panel(16, 12, "①"),
			panel(194, 12, "②"),
			panel(16, 104, "③"),
			panel(194, 104, "④"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 62 H154 M28 72 H154 M28 82 H154",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "128",
				y: "40",
				fontSize: "11",
				children: "海"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M206 48 H250 L300 70 H332",
				fill: "none",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M250 58 H332 M250 68 H332",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 150 H154 M36 162 H146 M44 174 H138",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 168 Q90 150 154 168",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M206 168 H332 M206 178 H332",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M206 156 Q270 142 332 156",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "300",
				y: "132",
				fontSize: "11",
				children: "海"
			})
		]
	});
}
function Contacts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 140",
		caption: "上下の地層の接し方",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16",
				y: "20",
				width: "100",
				height: "78",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 40 H108 M24 56 H108 M24 72 H108",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "66",
				y: "116",
				textAnchor: "middle",
				fontSize: "14",
				children: "ア"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "130",
				y: "20",
				width: "100",
				height: "78",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M138 40 H222 M138 78 H222",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M138 58 Q164 48 180 58 T222 54",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "180",
				y: "116",
				textAnchor: "middle",
				fontSize: "14",
				children: "イ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "244",
				y: "20",
				width: "100",
				height: "78",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M252 70 L336 40 M252 82 L336 52",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M252 56 H336",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "294",
				y: "116",
				textAnchor: "middle",
				fontSize: "14",
				children: "ウ"
			})
		]
	});
}
function Section() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 180",
		caption: "地層の断面",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "16",
				y: "28",
				fontSize: "12",
				children: "C"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "16",
				y: "78",
				fontSize: "12",
				children: "B"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "16",
				y: "140",
				fontSize: "12",
				children: "A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 40 H320 M40 58 H320",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 70 Q120 58 180 74 T320 66",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 96 C100 80 140 120 200 100 S300 120 320 96",
				fill: "none",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 112 C110 96 150 132 210 114 S300 132 320 112",
				fill: "none",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M150 40 L230 160",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "214",
				y: "36",
				fontSize: "12",
				children: "f"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "300",
				y: "128",
				fontSize: "11",
				children: "砂岩・泥岩"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "132",
				width: "280",
				height: "28",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "250",
				y: "150",
				fontSize: "11",
				children: "れき岩"
			})
		]
	});
}
function Solar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 170",
		caption: "太陽高度と単位面積",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 150 H330",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 40 H300 M40 78 H300",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 78 V150",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M250 40 L300 150",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 40 L250 150",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "48",
				y: "30",
				fontSize: "12",
				children: "赤道側"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "250",
				y: "30",
				fontSize: "12",
				children: "極側"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "55",
				y: "166",
				fontSize: "11",
				children: "せまい"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "248",
				y: "166",
				fontSize: "11",
				children: "広い"
			})
		]
	});
}
function Atmosphere() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 180",
		caption: "大気の層",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "20",
				width: "200",
				height: "28",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "48",
				width: "200",
				height: "28",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "76",
				width: "200",
				height: "36",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "112",
				width: "200",
				height: "40",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "250",
				y: "38",
				fontSize: "12",
				children: "熱圏"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "250",
				y: "66",
				fontSize: "12",
				children: "中間圏"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "250",
				y: "98",
				fontSize: "12",
				children: "成層圏"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "118",
				y: "98",
				fontSize: "11",
				fill: "var(--color-accent)",
				children: "オゾン"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "250",
				y: "136",
				fontSize: "12",
				children: "対流圏"
			})
		]
	});
}
function Pressure() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 150",
		caption: "机の上の3つの物体",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 112 H340",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "24",
				y: "132",
				fontSize: "11",
				children: "机"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "36",
				y: "62",
				width: "70",
				height: "50",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "71",
				y: "54",
				textAnchor: "middle",
				fontSize: "12",
				children: "A 300N"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "71",
				y: "92",
				textAnchor: "middle",
				fontSize: "11",
				children: "x Pa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "71",
				y: "146",
				textAnchor: "middle",
				fontSize: "11",
				children: "2m²"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "150,112 186,62 222,112",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "186",
				y: "54",
				textAnchor: "middle",
				fontSize: "12",
				children: "B y N"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "186",
				y: "100",
				textAnchor: "middle",
				fontSize: "11",
				children: "30Pa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "186",
				y: "146",
				textAnchor: "middle",
				fontSize: "11",
				children: "0.5m²"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "286,112 268,70 304,70",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "286",
				y: "54",
				textAnchor: "middle",
				fontSize: "12",
				children: "C 20N"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "286",
				y: "96",
				textAnchor: "middle",
				fontSize: "11",
				children: "4Pa"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "286",
				y: "146",
				textAnchor: "middle",
				fontSize: "11",
				children: "z m²"
			})
		]
	});
}
function Breeze() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 150",
		caption: "昼の海岸",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "70",
				y: "24",
				fontSize: "13",
				children: "昼"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 110 H160 L220 110 H336",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 110 L160 78 H220 L336 110",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "80",
				y: "104",
				fontSize: "13",
				children: "陸"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "270",
				y: "104",
				fontSize: "13",
				children: "海"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M110 78 V40",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 50 L110 36 L118 50",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M230 92 H120",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M136 84 L120 92 L136 100",
				fill: "none",
				stroke: "var(--color-accent)"
			})
		]
	});
}
function Circulation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 180",
		caption: "緯度と大気の流れ",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "180",
				cy: "90",
				r: "70",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M110 90 H250",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "186",
				y: "86",
				fontSize: "11",
				children: "赤道"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "186",
				y: "36",
				fontSize: "11",
				children: "30°"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "186",
				y: "156",
				fontSize: "11",
				children: "30°"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M180 90 V48",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M150 60 H210",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M150 70 V90 M210 70 V90",
				stroke: "var(--color-accent)"
			})
		]
	});
}
function Saturation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 180",
		caption: "気温と飽和水蒸気量",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 150 H320 M40 150 V20",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "250",
				y: "170",
				fontSize: "11",
				children: "気温℃"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "8",
				y: "24",
				fontSize: "11",
				children: "g/m³"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 132 C140 128 180 110 210 78 S280 30 300 24",
				fill: "none",
				stroke: "var(--color-accent)",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "78",
				y: "124",
				fontSize: "11",
				children: "10℃ 9.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "150",
				y: "96",
				fontSize: "11",
				children: "20℃ 17.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "230",
				y: "40",
				fontSize: "11",
				children: "30℃ 30.4"
			})
		]
	});
}
function Clouds() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 150",
		caption: "上昇気流の4つの形",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12",
				y: "16",
				width: "78",
				height: "90",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 90 V40 M58 90 V48",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "51",
				y: "128",
				textAnchor: "middle",
				fontSize: "14",
				children: "ア"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "98",
				y: "16",
				width: "78",
				height: "90",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M110 96 L150 40 H168",
				fill: "none",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M124 80 L146 52",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "137",
				y: "128",
				textAnchor: "middle",
				fontSize: "14",
				children: "イ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "184",
				y: "16",
				width: "78",
				height: "90",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M200 90 L223 48 L246 90",
				fill: "none",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "223",
				y: "128",
				textAnchor: "middle",
				fontSize: "14",
				children: "ウ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "270",
				y: "16",
				width: "78",
				height: "90",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M282 96 L330 40",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M286 70 L320 48",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "309",
				y: "128",
				textAnchor: "middle",
				fontSize: "14",
				children: "エ"
			})
		]
	});
}
function Foehn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, {
		viewBox: "0 0 360 160",
		caption: "山を越える空気",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 130 L180 36 L340 130 Z",
				fill: "var(--color-background)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 110 L150 60",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M210 60 L290 112",
				stroke: "var(--color-accent)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M120 70 Q150 50 176 62",
				fill: "var(--color-card)",
				stroke: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "48",
				y: "148",
				fontSize: "12",
				children: "風上"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "286",
				y: "148",
				fontSize: "12",
				children: "風下"
			})
		]
	});
}
var MAP = {
	columnar: Columnar,
	faults: Faults,
	fold: Fold,
	unconformity: Unconformity,
	contacts: Contacts,
	section: Section,
	solar: Solar,
	atmosphere: Atmosphere,
	pressure: Pressure,
	breeze: Breeze,
	circulation: Circulation,
	saturation: Saturation,
	clouds: Clouds,
	foehn: Foehn
};
function FigureView({ id }) {
	if (id === "none") return null;
	const Draw = MAP[id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg border border-border bg-background px-3 py-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Draw, {})
	});
}
var BANK = [
	{
		id: "fossil-def",
		unitId: "fossil-what",
		kind: "choice",
		prompt: "化石として最も適切な説明はどれですか。",
		choices: [
			"地層の中に見られる、過去の生物の遺骸や生命活動の痕跡",
			"いま生きている生物の骨だけを集めたもの",
			"火山の噴火でできた岩石そのもの",
			"鉱物の結晶が成長したものすべて"
		],
		answer: "地層の中に見られる、過去の生物の遺骸や生命活動の痕跡",
		accept: [],
		explanation: "化石は、地層の中の過去の生物の遺骸だけではありません。ふん、卵、巣穴、体毛がついたマンモスのように、生命活動の痕跡も化石です。",
		figure: "none"
	},
	{
		id: "fossil-trace",
		unitId: "fossil-what",
		kind: "input",
		prompt: "ふん、卵、巣穴のように、生物の活動のあとが地層に残ったものもふくめて何と呼びますか。",
		choices: [],
		answer: "化石",
		accept: ["かせき"],
		explanation: "からだそのものだけでなく、生命活動の痕跡も化石です。",
		figure: "none"
	},
	{
		id: "coral",
		unitId: "facies",
		kind: "choice",
		prompt: "サンゴの化石からわかる、当時の環境はどれですか。",
		choices: [
			"暖かく、浅く、きれいな海",
			"海水と淡水が混ざる汽水域",
			"温帯のやや寒冷な陸地",
			"やや寒冷な深い海"
		],
		answer: "暖かく、浅く、きれいな海",
		accept: [],
		explanation: "サンゴは示相化石で、暖かく浅くきれいな海（岩場）を示します。",
		figure: "none"
	},
	{
		id: "shijimi",
		unitId: "facies",
		kind: "input",
		prompt: "海水と淡水が混ざった汽水域を示す示相化石として、プリントにある二枚貝は何ですか。",
		choices: [],
		answer: "シジミ",
		accept: ["しじみ"],
		explanation: "シジミは汽水域にすむので、その化石があると海水と淡水が混ざった環境がわかります。",
		figure: "none"
	},
	{
		id: "buna",
		unitId: "facies",
		kind: "input",
		prompt: "温帯のやや寒冷な地域を示す示相化石の樹木は何ですか。",
		choices: [],
		answer: "ブナ",
		accept: ["ぶな"],
		explanation: "ブナは温帯のやや寒冷な陸地を示す示相化石です。ホタテ貝は、やや寒冷な浅い海を示します。",
		figure: "none"
	},
	{
		id: "facies-rule",
		unitId: "facies",
		kind: "choice",
		prompt: "示相化石に使いやすい生物の条件はどれですか。",
		choices: [
			"近い種類が現在も生きていて、特定の環境にだけすむ",
			"あらゆる環境に広くすむ",
			"近い種類が現在はまったく残っていない",
			"一つの時代だけに、世界中で栄えた"
		],
		answer: "近い種類が現在も生きていて、特定の環境にだけすむ",
		accept: [],
		explanation: "現在の仲間の暮らし方がわかるので環境を推定できます。特定の環境にだけすむことも必要です。限られた時代に広くすむ、は示準化石の条件です。",
		figure: "none"
	},
	{
		id: "paleozoic",
		unitId: "index",
		kind: "choice",
		prompt: "古生代の示準化石の組み合わせはどれですか。",
		choices: [
			"三葉虫、フズリナ",
			"アンモナイト、恐竜",
			"ビカリア、カヘイ石",
			"サンゴ、シジミ"
		],
		answer: "三葉虫、フズリナ",
		accept: [],
		explanation: "古生代は三葉虫やフズリナ、中生代はアンモナイトや恐竜、新生代はビカリアやカヘイ石です。",
		figure: "none"
	},
	{
		id: "index-name",
		unitId: "index",
		kind: "input",
		prompt: "限られた時代にだけ生き、広い範囲にすんだため、地層が堆積した年代がわかる化石を何といいますか。",
		choices: [],
		answer: "示準化石",
		accept: ["しじゅんかせき", "標準化石"],
		explanation: "年代がわかる化石が示準化石です。環境がわかる化石は示相化石です。",
		figure: "none"
	},
	{
		id: "trigonia",
		unitId: "index",
		kind: "input",
		prompt: "プリントで「三角貝」と同じものとして結んであった貝の名前は何ですか。",
		choices: [],
		answer: "トリゴニア",
		accept: ["とりごにあ", "三角貝"],
		explanation: "トリゴニアは三角貝とも呼ばれます。",
		figure: "none"
	},
	{
		id: "key-bed",
		unitId: "correlate",
		kind: "input",
		prompt: "離れた場所の柱状図を対比するとき使う、同時期に堆積したとわかる地層を何といいますか。",
		choices: [],
		answer: "鍵層",
		accept: ["けんそう", "かぎ層"],
		explanation: "鍵層は同時期の目印です。火山灰層（凝灰岩層）が最も適し、化石で対比することもあります。",
		figure: "none"
	},
	{
		id: "column-read",
		unitId: "correlate",
		kind: "choice",
		prompt: "図のAとBで、離れた地点でも同時期に積もったと結べる層はどれですか。",
		choices: [
			"同じ鉱物組成の火山灰層",
			"見た目が似ているだけの砂の層",
			"いちばん下のれきの層ならどれでも",
			"厚さが同じ層ならどれでも"
		],
		answer: "同じ鉱物組成の火山灰層",
		accept: [],
		explanation: "広い範囲にほぼ同時に降った火山灰は、鉱物組成が同じなら鍵層になります。",
		figure: "columnar"
	},
	{
		id: "aira",
		unitId: "correlate",
		kind: "input",
		prompt: "約2万2千年前の大噴火で、全国の地層に同じ火山灰を残した火山は何ですか。",
		choices: [],
		answer: "姶良火山",
		accept: [
			"姶良",
			"あいら",
			"あいらかざん",
			"あいら火山"
		],
		explanation: "姶良火山の噴火で広い範囲に火山灰が入りました。火砕流でできた鹿児島の分厚い火山灰の台地がシラス台地です。",
		figure: "none"
	},
	{
		id: "shirasu",
		unitId: "correlate",
		kind: "input",
		prompt: "姶良火山の火砕流でできた、鹿児島の分厚い火山灰の台地を何といいますか。",
		choices: [],
		answer: "シラス台地",
		accept: [
			"シラス",
			"しらす",
			"しらすだいち"
		],
		explanation: "火砕流がつくる分厚い火山灰の大地がシラス台地です。",
		figure: "none"
	},
	{
		id: "fold-def",
		unitId: "deform",
		kind: "input",
		prompt: "図のように、横からの力で地層が曲がったものを何といいますか。",
		choices: [],
		answer: "しゅう曲",
		accept: [
			"褶曲",
			"しゅうきょく",
			"しゆうきょく"
		],
		explanation: "横からの力で曲がったものがしゅう曲、耐えきれずに割れてずれたものが断層です。",
		figure: "fold"
	},
	{
		id: "normal-fault",
		unitId: "deform",
		kind: "input",
		prompt: "図のアは、上盤が下がるようにずれています。この断層を何といいますか。",
		choices: [],
		answer: "正断層",
		accept: ["せいだんそう"],
		explanation: "上盤が下がるのが正断層、上盤が上がるのが逆断層、水平にずれるのが横ずれ断層です。",
		figure: "faults"
	},
	{
		id: "fault-force",
		unitId: "deform",
		kind: "choice",
		prompt: "断層ができるときの説明として適切なものはどれですか。",
		choices: [
			"横からの力に耐えきれず、地層が壊れてずれる",
			"上からの重みだけで、地層が静かに曲がる",
			"海底で砂と泥が交互に積もる",
			"火山灰が同時に広い範囲へ降る"
		],
		answer: "横からの力に耐えきれず、地層が壊れてずれる",
		accept: [],
		explanation: "断層は、押す力や引く力に耐えきれず、地層が破壊されてずれたものです。",
		figure: "none"
	},
	{
		id: "unconformity-name",
		unitId: "unconformity",
		kind: "input",
		prompt: "大地が陸地化したときに侵食された跡で、すぐ上にれきが見られることが多い関係を何といいますか。",
		choices: [],
		answer: "不整合",
		accept: ["ふせいごう"],
		explanation: "堆積が一度とだえ、侵食されたあと再び堆積すると不整合ができます。境界面のすぐ上にはれきが見られることが多いです。",
		figure: "none"
	},
	{
		id: "unconformity-order",
		unitId: "unconformity",
		kind: "choice",
		prompt: "不整合面ができる順として適切なものはどれですか。",
		choices: [
			"海底に堆積 → 隆起 → 侵食 → 沈降して再び堆積",
			"侵食 → 断層 → しゅう曲 → 火山灰",
			"沈降したまま、一度も陸上に出ずに続く",
			"火山灰が降ったあと、すぐに溶岩だけが重なる"
		],
		answer: "海底に堆積 → 隆起 → 侵食 → 沈降して再び堆積",
		accept: [],
		explanation: "海底で整合に堆積した地層が隆起して陸地になり、流水で侵食されます。その後沈降して再び堆積が始まり、あいだが不整合面になります。",
		figure: "none"
	},
	{
		id: "contact-u",
		unitId: "unconformity",
		kind: "choice",
		prompt: "図のウのように、下の地層が傾き、上の地層と角度が違う関係はどれですか。",
		choices: [
			"傾斜不整合",
			"整合",
			"正断層",
			"しゅう曲だけ"
		],
		answer: "傾斜不整合",
		accept: [],
		explanation: "上下が平行で侵食の跡がなければ整合、平行でも侵食面があれば平行不整合、角度が違えば傾斜不整合です。",
		figure: "contacts"
	},
	{
		id: "visible",
		unitId: "heat",
		kind: "choice",
		prompt: "太陽放射のエネルギーの中心になっている電磁波はどれですか。",
		choices: [
			"可視光線",
			"赤外線",
			"電波",
			"ガンマ線"
		],
		answer: "可視光線",
		accept: [],
		explanation: "太陽放射の中心は可視光線です。地球から宇宙へ出る地球放射の中心は赤外線です。",
		figure: "none"
	},
	{
		id: "balance",
		unitId: "heat",
		kind: "input",
		prompt: "地球全体で、入ってくる太陽放射と出ていく地球放射がつりあい、気温がほぼ一定になることを何といいますか。",
		choices: [],
		answer: "放射平衡",
		accept: ["ほうしゃへいこう"],
		explanation: "入るエネルギーと出るエネルギーがつりあう状態が放射平衡です。約30%の太陽放射は反射されます。",
		figure: "none"
	},
	{
		id: "latitude",
		unitId: "heat",
		kind: "choice",
		prompt: "図をもとにすると、単位面積あたりの太陽放射量が多くなりやすいのはどこですか。",
		choices: [
			"太陽高度が高い赤道付近",
			"同じ光が広い面積に広がる北極付近",
			"太陽高度が低い高緯度だけ",
			"夜になっている側だけ"
		],
		answer: "太陽高度が高い赤道付近",
		accept: [],
		explanation: "太陽高度が高いほど、単位面積あたりの太陽放射量が多く、地温も気温も高くなりやすいです。低緯度で多く、高緯度で少なくなります。",
		figure: "solar"
	},
	{
		id: "dry-air",
		unitId: "air",
		kind: "choice",
		prompt: "水蒸気を含めない乾燥空気の体積の割合として適切なものはどれですか。",
		choices: [
			"窒素約78%、酸素約21%、アルゴン約0.9%、二酸化炭素約0.04%",
			"酸素約78%、窒素約21%",
			"窒素約21%、酸素約78%、二酸化炭素約10%",
			"アルゴン約78%、窒素約21%"
		],
		answer: "窒素約78%、酸素約21%、アルゴン約0.9%、二酸化炭素約0.04%",
		accept: [],
		explanation: "この割合に水蒸気は含まれていません。水蒸気は場所と時間で大きく変わります。",
		figure: "none"
	},
	{
		id: "tropo",
		unitId: "air",
		kind: "input",
		prompt: "対流圏の厚さは、平均およそ何kmですか。数字だけ答えてください。",
		choices: [],
		answer: "11",
		accept: ["１１", "約11"],
		explanation: "対流圏は地表から平均約11kmまでです。上限の圏界面は季節や緯度で変わります。上空ほど気温が低く、対流が起きます。",
		figure: "none"
	},
	{
		id: "ozone",
		unitId: "air",
		kind: "choice",
		prompt: "成層圏で上空ほど気温が高くなる主な理由はどれですか。",
		choices: [
			"オゾンが紫外線を吸収して熱を出すから",
			"熱源である地表に近いから",
			"対流が激しく混ざるから",
			"水蒸気が凝結して雲ができるから"
		],
		answer: "オゾンが紫外線を吸収して熱を出すから",
		accept: [],
		explanation: "オゾン層は高度およそ20〜30kmにあり、酸素からできます。紫外線を吸収するときに熱を出すので、成層圏は上空ほど気温が高く安定します。",
		figure: "none"
	},
	{
		id: "pressure-x",
		unitId: "pressure",
		kind: "input",
		prompt: "図のAで、xは何Paですか。数字だけ答えてください。",
		choices: [],
		answer: "150",
		accept: ["１５０"],
		explanation: "圧力は力÷面積です。300N ÷ 2m² = 150Paです。",
		figure: "pressure"
	},
	{
		id: "pressure-y",
		unitId: "pressure",
		kind: "input",
		prompt: "図のBで、yは何Nですか。数字だけ答えてください。",
		choices: [],
		answer: "15",
		accept: ["１５"],
		explanation: "力は圧力×面積です。30Pa × 0.5m² = 15Nです。",
		figure: "pressure"
	},
	{
		id: "atm",
		unitId: "pressure",
		kind: "input",
		prompt: "海抜0mの1気圧は約何hPaですか。数字だけ答えてください。",
		choices: [],
		answer: "1013",
		accept: ["１０１３"],
		explanation: "1気圧は約1013hPaです。1hPa = 100Paなので、101300Pa、つまり101300N/m²にもなります。",
		figure: "none"
	},
	{
		id: "wind-basic",
		unitId: "wind",
		kind: "choice",
		prompt: "風が吹く基本の向きはどれですか。",
		choices: [
			"気圧の高いところから低いところへ",
			"気圧の低いところから高いところへ",
			"気温が同じなら必ず北から南へ",
			"いつも陸上から海上だけへ"
		],
		answer: "気圧の高いところから低いところへ",
		accept: [],
		explanation: "大気は気圧の高いところから低いところへ動きます。これが風です。",
		figure: "none"
	},
	{
		id: "sea-breeze",
		unitId: "wind",
		kind: "input",
		prompt: "図は昼の海岸です。海から陸へ吹くこの風を何といいますか。",
		choices: [],
		answer: "海風",
		accept: ["かいふう", "うみかぜ"],
		explanation: "昼は陸が早く温まり、陸の空気が上昇して地表の気圧が下がります。海から陸へ吹くのが海風です。夜は逆の陸風、朝夕は凪です。",
		figure: "breeze"
	},
	{
		id: "monsoon",
		unitId: "wind",
		kind: "choice",
		prompt: "夏の季節風の向きとして適切なものはどれですか。",
		choices: [
			"海洋から大陸へ",
			"大陸から海洋へ",
			"極から赤道へだけ",
			"いつも西から東へ"
		],
		answer: "海洋から大陸へ",
		accept: [],
		explanation: "陸は水より比熱が小さく、温まりやすく冷めやすいです。夏は大陸が温まって低圧になり、海洋から大陸へ風が吹きます。冬は逆です。",
		figure: "none"
	},
	{
		id: "coriolis",
		unitId: "circ",
		kind: "input",
		prompt: "地球の自転によって、北半球では進行方向に対して右向きに働く見かけの力を何といいますか。",
		choices: [],
		answer: "コリオリの力",
		accept: [
			"コリオリ力",
			"転向力",
			"こりおりの力",
			"こりおり力",
			"てんこうりょく"
		],
		explanation: "コリオリの力（転向力）のため、赤道から極まで一つの水平対流にはなりません。赤道で上昇した大気は緯度およそ30度で南北に進めなくなります。",
		figure: "none"
	},
	{
		id: "trade",
		unitId: "circ",
		kind: "input",
		prompt: "ハドレー循環の地上付近で、東寄りに吹く風を何といいますか。",
		choices: [],
		answer: "貿易風",
		accept: ["ぼうえきふう"],
		explanation: "緯度30度付近から赤道へ向かう地上の東寄りの風が貿易風です。中緯度で西から吹くのは偏西風です。",
		figure: "none"
	},
	{
		id: "jet",
		unitId: "circ",
		kind: "input",
		prompt: "偏西風帯の上空、圏界面付近で特に強く吹く流れを何といいますか。",
		choices: [],
		answer: "ジェット気流",
		accept: ["ジェットストリーム", "じぇっときりゅう"],
		explanation: "偏西風は南北に蛇行して熱を運びます。その上空の圏界面付近で特に強い流れがジェット気流です。",
		figure: "none"
	},
	{
		id: "saturated",
		unitId: "vapor",
		kind: "input",
		prompt: "空気1m³に含むことのできる最大の水蒸気量を何といいますか。",
		choices: [],
		answer: "飽和水蒸気量",
		accept: ["ほうわすいじょうきりょう"],
		explanation: "飽和水蒸気量は気温が高いほど大きくなります。水蒸気が飽和する気温が露点です。",
		figure: "none"
	},
	{
		id: "humidity-order",
		unitId: "vapor",
		kind: "choice",
		prompt: "空気1m³あたりの水蒸気量は、Aが15℃で10g、Bが20℃で10g、Cが30℃で20gです。飽和水蒸気量を10℃は9.4g、15℃は約12.8g、20℃は17.3g、30℃は30.4gとして、湿度が高い順はどれですか。",
		choices: [
			"A → C → B",
			"B → C → A",
			"C → A → B",
			"A → B → C"
		],
		answer: "A → C → B",
		accept: [],
		explanation: "相対湿度は、実際の水蒸気量÷その気温の飽和水蒸気量×100です。Aは10/12.8で約78%、Cは20/30.4で約66%、Bは10/17.3で約58%です。",
		figure: "none"
	},
	{
		id: "droplets",
		unitId: "vapor",
		kind: "choice",
		prompt: "30℃で空気1m³に20gの水蒸気を含む部屋が300m³あります。密閉したまま15℃まで冷やすと、生じる水滴はおよそ何gですか。最も近いものを選んでください。15℃の飽和水蒸気量は約12.8g/m³です。",
		choices: [
			"2100g",
			"900g",
			"3900g",
			"5100g"
		],
		answer: "2100g",
		accept: [],
		explanation: "はじめの水蒸気は20×300=6000gです。15℃で含められるのは約12.8×300=3840gなので、差は約2160g。最も近いのは2100gです。",
		figure: "none"
	},
	{
		id: "cloud-need",
		unitId: "cloud",
		kind: "choice",
		prompt: "雲ができる絶対条件はどれですか。",
		choices: [
			"上昇気流があること",
			"空気が下降すること",
			"気圧が上がり続けること",
			"空気が完全に乾燥していること"
		],
		answer: "上昇気流があること",
		accept: [],
		explanation: "上昇すると周囲の気圧が下がり、空気が断熱膨張して断熱冷却します。露点に達すると水滴ができ、雲になります。",
		figure: "none"
	},
	{
		id: "nuclei",
		unitId: "cloud",
		kind: "input",
		prompt: "水滴ができるときに芯になる、ホコリなどの粒を何といいますか。",
		choices: [],
		answer: "凝結核",
		accept: ["ぎょうけつかく"],
		explanation: "核がないと、露点以下でも水滴ができないことがあります。この状態を過飽和といいます。",
		figure: "none"
	},
	{
		id: "orographic",
		unitId: "cloud",
		kind: "input",
		prompt: "図のイのように、山の斜面に沿って空気が昇る上昇気流を何性といいますか。「地形」のように答えてください。",
		choices: [],
		answer: "地形",
		accept: [
			"地形性",
			"ちけい",
			"ちけいせい"
		],
		explanation: "アは対流性、イは地形性、ウは低気圧性、エは前線性です。",
		figure: "clouds"
	},
	{
		id: "dry-rate",
		unitId: "foehn",
		kind: "input",
		prompt: "水蒸気が飽和していない空気が上昇するとき、高度100mにつき気温は約何℃下がりますか。数字だけ答えてください。",
		choices: [],
		answer: "1",
		accept: [
			"1.0",
			"１",
			"1.0℃"
		],
		explanation: "飽和前は乾燥断熱減率で、100mにつき約1.0℃下がります。飽和後の湿潤断熱減率は100mにつき約0.5℃です。",
		figure: "none"
	},
	{
		id: "foehn-summit",
		unitId: "foehn",
		kind: "input",
		prompt: "標高0mで、まだ飽和していない25℃の空気が山を越えます。1500mで雲ができ、降水しながら2500mの山頂まで昇りました。山頂の気温は何℃ですか。数字だけ答えてください。",
		choices: [],
		answer: "5",
		accept: ["５"],
		explanation: "0mから1500mは未飽和なので1.0℃/100m、25−15=10℃。1500mから2500mは飽和なので0.5℃/100m、10−5=5℃です。",
		figure: "none"
	},
	{
		id: "foehn-lee",
		unitId: "foehn",
		kind: "input",
		prompt: "山頂5℃で雲が消え、標高0mまで下りました。下降中は飽和していません。風下の標高0mの気温は何℃ですか。数字だけ答えてください。",
		choices: [],
		answer: "30",
		accept: ["３０"],
		explanation: "下降する未飽和の空気は100mにつき1.0℃上がります。2500mでは25℃上がるので、5+25=30℃です。",
		figure: "none"
	}
];
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
function materialize(item) {
	return {
		id: `bank-${item.id}-${Date.now().toString(36)}`,
		unitId: item.unitId,
		unitTitle: unitTitle(item.unitId),
		kind: item.kind,
		prompt: item.prompt,
		choices: item.kind === "choice" ? shuffle(item.choices) : [],
		answer: item.answer,
		accept: item.accept,
		explanation: item.explanation,
		figure: item.figure,
		source: "bank"
	};
}
function pickBank(plan) {
	const recent = new Set(plan.recentPrompts);
	const fresh = BANK.filter((item) => !recent.has(item.prompt));
	let pool = fresh.filter((item) => item.unitId === plan.unitId);
	if (plan.kind !== "either") {
		const typed = pool.filter((item) => item.kind === plan.kind);
		if (typed.length > 0) pool = typed;
	}
	if (pool.length === 0) pool = fresh.length > 0 ? fresh : BANK;
	return materialize(pool[Math.floor(Math.random() * pool.length)] ?? BANK[0]);
}
function light(raw) {
	return raw.normalize("NFKC").trim().toLowerCase().replace(/\s+/g, "");
}
var UNIT_TAIL = /(ヘクトパスカル|パスカル|hpa|pa|km|kg|cm²|cm2|m²|m2|g\/m³|g\/m3|％|%|℃|°c|度|n|g|m)$/i;
function stripUnits(raw) {
	let text = light(raw).replace(/[。．、,，]/g, "").replace(/[〜～~∼ー−–—]/g, "-").replace(/から/g, "-").replace(/約/g, "");
	for (let i = 0; i < 3; i += 1) {
		const next = text.replace(UNIT_TAIL, "");
		if (next === text) break;
		text = next;
	}
	return text;
}
function parseNum(raw) {
	const text = stripUnits(raw);
	if (!/^-?\d+(\.\d+)?$/.test(text)) return null;
	const value = Number(text);
	return Number.isFinite(value) ? value : null;
}
function choiceMatches(choice, answer) {
	return light(choice) === light(answer);
}
function inputMatches(answer, accept, raw) {
	const got = stripUnits(raw);
	if (!got) return false;
	if ([answer, ...accept].map(stripUnits).filter(Boolean).includes(got)) return true;
	const given = parseNum(raw);
	if (given === null) return false;
	return [answer, ...accept].some((key) => {
		const expected = parseNum(key);
		return expected !== null && Object.is(expected, given);
	});
}
function isCorrect(question, raw) {
	if (question.kind === "choice") return choiceMatches(raw, question.answer);
	return inputMatches(question.answer, question.accept, raw);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
var generateQuestion = createServerFn({ method: "POST" }).validator(parseInput).handler(createSsrRpc("06207a84c69a24c1d67489fcde9ce658ff828738ee1251b61458ce41c8053e7a"));
var STORAGE_KEY = "strata-weather-drill-v1";
var MARKS = [
	"ア",
	"イ",
	"ウ",
	"エ"
];
var EMPTY = {
	answered: 0,
	correct: 0,
	streak: 0,
	bestStreak: 0,
	unitCounts: {}
};
function loadStats() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return EMPTY;
		const parsed = JSON.parse(raw);
		return {
			answered: typeof parsed.answered === "number" ? parsed.answered : 0,
			correct: typeof parsed.correct === "number" ? parsed.correct : 0,
			streak: typeof parsed.streak === "number" ? parsed.streak : 0,
			bestStreak: typeof parsed.bestStreak === "number" ? parsed.bestStreak : 0,
			unitCounts: parsed.unitCounts && typeof parsed.unitCounts === "object" ? parsed.unitCounts : {}
		};
	} catch {
		return EMPTY;
	}
}
function saveStats(stats) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}
function planFrom(stats, memory) {
	return {
		unitId: pickUnit(stats.unitCounts, memory.prev),
		kind: pickKind(memory.kinds),
		angle: ANGLES[memory.kinds.length % ANGLES.length] ?? ANGLES[0],
		recentPrompts: memory.recent.slice(-8)
	};
}
async function obtain(stats, memory) {
	const plan = planFrom(stats, memory);
	try {
		const result = await generateQuestion({ data: plan });
		if (result.ok) return result.question;
	} catch (error) {
		console.error(error);
	}
	return pickBank(plan);
}
function DrillApp() {
	const [screen, setScreen] = (0, import_react.useState)("lobby");
	const [phase, setPhase] = (0, import_react.useState)("loading");
	const [question, setQuestion] = (0, import_react.useState)(null);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [verdict, setVerdict] = (0, import_react.useState)(null);
	const [confirmOpen, setConfirmOpen] = (0, import_react.useState)(false);
	const [stats, setStats] = (0, import_react.useState)(EMPTY);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [number, setNumber] = (0, import_react.useState)(0);
	const statsRef = (0, import_react.useRef)(EMPTY);
	const memory = (0, import_react.useRef)({
		recent: [],
		kinds: [],
		prefetch: null,
		ready: null,
		epoch: 0,
		busy: false
	});
	const headingRef = (0, import_react.useRef)(null);
	const stayRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const loaded = loadStats();
		statsRef.current = loaded;
		setStats(loaded);
		setReady(true);
	}, []);
	const commit = (0, import_react.useCallback)((next) => {
		statsRef.current = next;
		setStats(next);
		saveStats(next);
	}, []);
	const present = (0, import_react.useCallback)((item) => {
		const current = statsRef.current;
		const count = (current.unitCounts[item.unitId] ?? 0) + 1;
		commit({
			...current,
			unitCounts: {
				...current.unitCounts,
				[item.unitId]: count
			}
		});
		const memo = memory.current;
		memo.prev = item.unitId;
		memo.recent = [...memo.recent, item.prompt].slice(-20);
		memo.kinds = [...memo.kinds, item.kind].slice(-12);
		memo.ready = null;
		const epoch = memo.epoch;
		memo.prefetch = obtain(statsRef.current, memo).then((next) => {
			if (memory.current.epoch === epoch) memory.current.ready = next;
			return next;
		});
		setQuestion(item);
		setSelected(null);
		setDraft("");
		setVerdict(null);
		setPhase("answer");
		setNumber((value) => value + 1);
	}, [commit]);
	const start = (0, import_react.useCallback)(async () => {
		const epoch = memory.current.epoch + 1;
		memory.current.epoch = epoch;
		memory.current.prefetch = null;
		memory.current.ready = null;
		setScreen("quiz");
		setPhase("loading");
		setQuestion(null);
		setConfirmOpen(false);
		setNumber(0);
		const item = await obtain(statsRef.current, memory.current);
		if (memory.current.epoch !== epoch) return;
		present(item);
	}, [present]);
	const goNext = (0, import_react.useCallback)(async () => {
		if (memory.current.busy) return;
		memory.current.busy = true;
		const epoch = memory.current.epoch;
		const ready = memory.current.ready;
		if (ready) {
			memory.current.ready = null;
			memory.current.prefetch = null;
			memory.current.busy = false;
			present(ready);
			return;
		}
		setPhase("loading");
		const pending = memory.current.prefetch;
		memory.current.prefetch = null;
		const item = pending ? await pending : await obtain(statsRef.current, memory.current);
		memory.current.busy = false;
		if (memory.current.epoch !== epoch) return;
		present(item);
	}, [present]);
	const submit = (0, import_react.useCallback)(() => {
		if (!question || phase !== "answer") return;
		const raw = question.kind === "choice" ? selected ?? "" : draft;
		if (!raw.trim()) return;
		const ok = isCorrect(question, raw);
		setVerdict(ok);
		setPhase("feedback");
		const current = statsRef.current;
		const streak = ok ? current.streak + 1 : 0;
		commit({
			...current,
			answered: current.answered + 1,
			correct: current.correct + (ok ? 1 : 0),
			streak,
			bestStreak: Math.max(current.bestStreak, streak)
		});
	}, [
		commit,
		draft,
		phase,
		question,
		selected
	]);
	const quit = (0, import_react.useCallback)(() => {
		memory.current.epoch += 1;
		memory.current.prefetch = null;
		memory.current.ready = null;
		memory.current.busy = false;
		setConfirmOpen(false);
		setScreen("lobby");
		setQuestion(null);
		setPhase("loading");
	}, []);
	(0, import_react.useEffect)(() => {
		if (phase === "answer" && question) headingRef.current?.focus();
	}, [phase, question]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (event.key !== "Enter" || confirmOpen || phase !== "feedback") return;
			event.preventDefault();
			goNext();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		confirmOpen,
		goNext,
		phase
	]);
	const covered = UNITS.filter((unit) => (stats.unitCounts[unit.id] ?? 0) > 0).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "paper min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]",
			children: screen === "lobby" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lobby, {
				ready,
				stats,
				covered,
				onStart: () => void start(),
				onReset: () => commit(EMPTY)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, {
				phase,
				question,
				number,
				covered,
				stats,
				selected,
				draft,
				verdict,
				headingRef,
				onQuit: () => setConfirmOpen(true),
				onSelect: setSelected,
				onDraft: setDraft,
				onSubmit: submit,
				onNext: () => void goNext()
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
			open: confirmOpen,
			onOpenChange: setConfirmOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, { className: "backdrop-in fixed inset-0 z-40 bg-[color-mix(in_oklab,var(--color-foreground)_40%,transparent)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, {
				className: "modal-in fixed inset-x-4 top-1/2 z-50 mx-auto w-full max-w-sm rounded-xl border border-border bg-card p-4",
				onOpenAutoFocus: (event) => {
					event.preventDefault();
					stayRef.current?.focus();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, {
						className: "font-display text-2xl text-foreground",
						children: "やめますか？"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "「はい」でロビーに戻ります。「いいえ」で、いまの問題を続けます。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
							className: "btn btn-line",
							onClick: quit,
							children: "はい"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, {
							ref: stayRef,
							className: "btn btn-primary",
							children: "いいえ"
						})]
					})
				]
			})] })
		})]
	});
}
function Lobby({ ready, stats, covered, onStart, onReset }) {
	const rate = stats.answered === 0 ? "—" : `${Math.round(stats.correct / stats.answered * 100)}%`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-1 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-muted",
				children: "中学理科"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-tight text-foreground",
				children: "地層と天気のドリル"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-prose text-base leading-relaxed text-foreground",
				children: "化石、地層、大気、天気。11枚のプリントの範囲から、その場で新しい問題を作ります。同じ問題を繰り返すのではありません。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-xl border border-border bg-card p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted",
					children: "四択と、ことばや数字の入力が混ざります。終わるまで出続けます。"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-primary mt-4 w-full",
					type: "button",
					onClick: onStart,
					disabled: !ready,
					children: "問題を始める"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "正解率",
						value: rate
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "連続",
						value: String(stats.streak)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "ふれた単元",
						value: `${covered}/${UNITS.length}`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex flex-wrap gap-2",
				children: UNITS.map((unit) => {
					const seen = (stats.unitCounts[unit.id] ?? 0) > 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: `rounded-md border px-2 py-1 text-xs ${seen ? "border-accent text-accent" : "border-border text-muted"}`,
						children: unit.title
					}, unit.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn btn-quiet mt-6 self-start px-0",
				type: "button",
				onClick: onReset,
				children: "成績を消す"
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 text-lg font-medium text-foreground tabular-nums",
			children: value
		})]
	});
}
function Quiz({ phase, question, number, covered, stats, selected, draft, verdict, headingRef, onQuit, onSelect, onDraft, onSubmit, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex flex-1 flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted tabular-nums",
				children: [
					question && phase !== "loading" ? `第${number}問` : "作成中",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2",
						children: "·"
					}),
					"単元 ",
					covered,
					"/",
					UNITS.length,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2",
						children: "·"
					}),
					stats.correct,
					"/",
					stats.answered
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn btn-quiet min-h-11 shrink-0 px-2",
				type: "button",
				onClick: onQuit,
				children: "やめる"
			})]
		}), phase === "loading" || !question ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shimmer font-display text-3xl",
				children: "問題を作っています"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "プリントの範囲から、いまの1問を組み立てています。"
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mt-4 rounded-xl border border-border bg-card p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md bg-background px-2 py-1 text-xs text-muted",
						children: question.unitTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-md bg-background px-2 py-1 text-xs text-muted",
						children: question.kind === "choice" ? "四択" : "入力"
					})]
				}),
				question.figure !== "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FigureView, { id: question.figure })
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					ref: headingRef,
					tabIndex: -1,
					className: "mt-4 text-lg leading-relaxed font-medium text-foreground outline-none",
					children: question.prompt
				}),
				question.kind === "choice" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-2",
					role: "group",
					"aria-label": "選択肢",
					children: question.choices.map((choice, index) => {
						const mark = MARKS[index] ?? String(index + 1);
						let tone = "";
						if (phase === "feedback") {
							if (isCorrect(question, choice)) tone = "choice-right";
							else if (choice === selected) tone = "choice-wrong";
						} else if (choice === selected) tone = "choice-on";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: `btn btn-line flex h-auto min-h-11 items-start justify-start py-2 text-left whitespace-normal ${tone}`,
							disabled: phase === "feedback",
							onClick: () => onSelect(choice),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-3 inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-border text-sm",
								children: mark
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "leading-snug",
								children: choice
							})]
						}, choice);
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-4 block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: "答え"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: "mt-2 min-h-11 w-full rounded-lg border border-border bg-background px-3 text-base text-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
						value: draft,
						disabled: phase === "feedback",
						autoComplete: "off",
						spellCheck: false,
						inputMode: "text",
						placeholder: "ことば、または数字",
						onChange: (event) => onDraft(event.target.value),
						onKeyDown: (event) => {
							if (event.key === "Enter") {
								event.preventDefault();
								onSubmit();
							}
						}
					})]
				}),
				phase === "answer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn btn-primary mt-4 w-full",
					type: "button",
					onClick: onSubmit,
					disabled: question.kind === "choice" ? !selected : draft.trim().length === 0,
					children: "答える"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-lg border border-border bg-background p-3",
					"aria-live": "polite",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `font-medium ${verdict ? "text-accent" : "text-danger"}`,
							children: verdict ? "正解" : "不正解"
						}),
						!verdict ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-foreground",
							children: ["あなたの答え　", question.kind === "choice" ? selected : draft]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-foreground",
							children: ["答え　", question.answer]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: question.explanation
						}),
						question.source === "bank" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-subtle",
							children: "通信できなかったので、プリントの確認問題です。"
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "btn btn-primary mt-4 w-full",
							type: "button",
							onClick: onNext,
							children: "次の問題"
						})
					]
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrillApp, {});
}
//#endregion
export { Home as component };
