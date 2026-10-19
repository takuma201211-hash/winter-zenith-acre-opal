import type { ReactNode } from "react";
import type { FigureId } from "@/lib/units";

function Frame({
  children,
  viewBox,
  caption,
}: {
  children: ReactNode;
  viewBox: string;
  caption: string;
}) {
  return (
    <figure className="m-0">
      <svg viewBox={viewBox} className="h-auto w-full text-foreground" role="img" aria-label={caption} style={{ fontFamily: "inherit" }}>
        {children}
      </svg>
      <figcaption className="mt-2 text-xs text-muted">{caption}</figcaption>
    </figure>
  );
}

function Columnar() {
  return (
    <Frame viewBox="0 0 360 250" caption="A地域とB地域の柱状図">
      <text x="70" y="22" textAnchor="middle" fontSize="13">
        A地域
      </text>
      <text x="270" y="22" textAnchor="middle" fontSize="13">
        B地域
      </text>
      <rect x="40" y="32" width="64" height="26" fill="var(--color-card)" stroke="currentColor" />
      <rect x="238" y="32" width="64" height="26" fill="var(--color-card)" stroke="currentColor" />
      <path d="M104 45 H238" stroke="var(--color-accent)" strokeDasharray="4 3" />
      <text x="171" y="40" textAnchor="middle" fontSize="10" fill="var(--color-accent)">
        同じ鉱物の火山灰
      </text>
      <rect x="40" y="58" width="64" height="34" fill="var(--color-background)" stroke="currentColor" />
      <rect x="238" y="58" width="64" height="34" fill="var(--color-background)" stroke="currentColor" />
      <text x="112" y="80" fontSize="11">
        砂
      </text>
      <text x="308" y="80" fontSize="11">
        砂
      </text>
      <rect x="40" y="92" width="64" height="46" fill="var(--color-card)" stroke="currentColor" />
      <rect x="238" y="92" width="64" height="36" fill="var(--color-card)" stroke="currentColor" />
      <text x="112" y="118" fontSize="11">
        カヘイ石
      </text>
      <text x="308" y="114" fontSize="11">
        カヘイ石
      </text>
      <rect x="238" y="128" width="64" height="40" fill="var(--color-background)" stroke="currentColor" />
      <text x="308" y="152" fontSize="11">
        アンモナイト
      </text>
      <rect x="40" y="138" width="64" height="70" fill="var(--color-background)" stroke="currentColor" />
      <rect x="238" y="168" width="64" height="40" fill="var(--color-background)" stroke="currentColor" />
      <text x="112" y="178" fontSize="11">
        フズリナ
      </text>
      <text x="308" y="192" fontSize="11">
        フズリナ
      </text>
    </Frame>
  );
}

function Faults() {
  return (
    <Frame viewBox="0 0 360 150" caption="ア・イ・ウのずれ方">
      <path d="M18 48 H68 V96 H18 Z" fill="var(--color-card)" stroke="currentColor" />
      <path d="M68 72 H118 V120 H68 Z" fill="var(--color-background)" stroke="currentColor" />
      <path d="M68 48 V72" stroke="currentColor" />
      <path d="M90 78 V104" stroke="var(--color-accent)" />
      <path d="M84 96 L90 108 L96 96" fill="none" stroke="var(--color-accent)" />
      <text x="68" y="142" textAnchor="middle" fontSize="14">
        ア
      </text>

      <path d="M150 78 H200 V126 H150 Z" fill="var(--color-background)" stroke="currentColor" />
      <path d="M200 42 H250 V90 H200 Z" fill="var(--color-card)" stroke="currentColor" />
      <path d="M200 78 V90" stroke="currentColor" />
      <path d="M222 78 V52" stroke="var(--color-accent)" />
      <path d="M216 60 L222 46 L228 60" fill="none" stroke="var(--color-accent)" />
      <text x="200" y="142" textAnchor="middle" fontSize="14">
        イ
      </text>

      <path d="M278 58 H318 V102 H278 Z" fill="var(--color-card)" stroke="currentColor" />
      <path d="M318 58 H358 V102 H318 Z" fill="var(--color-background)" stroke="currentColor" />
      <path d="M292 72 H330" stroke="var(--color-accent)" />
      <path d="M318 88 H280" stroke="var(--color-accent)" />
      <path d="M322 66 L334 72 L322 78" fill="none" stroke="var(--color-accent)" />
      <path d="M308 82 L296 88 L308 94" fill="none" stroke="var(--color-accent)" />
      <text x="318" y="142" textAnchor="middle" fontSize="14">
        ウ
      </text>
    </Frame>
  );
}

function Fold() {
  return (
    <Frame viewBox="0 0 360 150" caption="横から力を受けて曲がった地層">
      <path d="M40 78 H90" stroke="var(--color-accent)" />
      <path d="M78 70 L90 78 L78 86" fill="none" stroke="var(--color-accent)" />
      <path d="M320 78 H270" stroke="var(--color-accent)" />
      <path d="M282 70 L270 78 L282 86" fill="none" stroke="var(--color-accent)" />
      <path d="M70 48 C120 48 130 100 180 100 C230 100 240 48 290 48" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M70 66 C120 66 140 112 180 112 C220 112 240 66 290 66" fill="none" stroke="currentColor" strokeWidth="6" />
      <path d="M70 82 C120 82 145 122 180 122 C215 122 240 82 290 82" fill="none" stroke="currentColor" strokeWidth="4" />
    </Frame>
  );
}

function Unconformity() {
  const panel = (x: number, y: number, n: string) => (
    <g transform={`translate(${x} ${y})`}>
      <rect width="150" height="78" fill="var(--color-card)" stroke="currentColor" />
      <text x="12" y="18" fontSize="13">
        {n}
      </text>
    </g>
  );
  return (
    <Frame viewBox="0 0 360 200" caption="不整合面ができる順">
      {panel(16, 12, "①")}
      {panel(194, 12, "②")}
      {panel(16, 104, "③")}
      {panel(194, 104, "④")}
      <path d="M28 62 H154 M28 72 H154 M28 82 H154" stroke="currentColor" />
      <text x="128" y="40" fontSize="11">
        海
      </text>
      <path d="M206 48 H250 L300 70 H332" fill="none" stroke="currentColor" />
      <path d="M250 58 H332 M250 68 H332" stroke="currentColor" />
      <path d="M28 150 H154 M36 162 H146 M44 174 H138" stroke="currentColor" />
      <path d="M28 168 Q90 150 154 168" fill="none" stroke="var(--color-accent)" />
      <path d="M206 168 H332 M206 178 H332" stroke="currentColor" />
      <path d="M206 156 Q270 142 332 156" fill="none" stroke="var(--color-accent)" />
      <text x="300" y="132" fontSize="11">
        海
      </text>
    </Frame>
  );
}

function Contacts() {
  return (
    <Frame viewBox="0 0 360 140" caption="上下の地層の接し方">
      <rect x="16" y="20" width="100" height="78" fill="var(--color-card)" stroke="currentColor" />
      <path d="M24 40 H108 M24 56 H108 M24 72 H108" stroke="currentColor" />
      <text x="66" y="116" textAnchor="middle" fontSize="14">
        ア
      </text>
      <rect x="130" y="20" width="100" height="78" fill="var(--color-card)" stroke="currentColor" />
      <path d="M138 40 H222 M138 78 H222" stroke="currentColor" />
      <path d="M138 58 Q164 48 180 58 T222 54" fill="none" stroke="var(--color-accent)" />
      <text x="180" y="116" textAnchor="middle" fontSize="14">
        イ
      </text>
      <rect x="244" y="20" width="100" height="78" fill="var(--color-card)" stroke="currentColor" />
      <path d="M252 70 L336 40 M252 82 L336 52" stroke="currentColor" />
      <path d="M252 56 H336" stroke="var(--color-accent)" />
      <text x="294" y="116" textAnchor="middle" fontSize="14">
        ウ
      </text>
    </Frame>
  );
}

function Section() {
  return (
    <Frame viewBox="0 0 360 180" caption="地層の断面">
      <text x="16" y="28" fontSize="12">
        C
      </text>
      <text x="16" y="78" fontSize="12">
        B
      </text>
      <text x="16" y="140" fontSize="12">
        A
      </text>
      <path d="M40 40 H320 M40 58 H320" stroke="currentColor" />
      <path d="M40 70 Q120 58 180 74 T320 66" fill="none" stroke="var(--color-accent)" />
      <path d="M40 96 C100 80 140 120 200 100 S300 120 320 96" fill="none" stroke="currentColor" />
      <path d="M40 112 C110 96 150 132 210 114 S300 132 320 112" fill="none" stroke="currentColor" />
      <path d="M150 40 L230 160" stroke="currentColor" strokeWidth="2" />
      <text x="214" y="36" fontSize="12">
        f
      </text>
      <text x="300" y="128" fontSize="11">
        砂岩・泥岩
      </text>
      <rect x="40" y="132" width="280" height="28" fill="var(--color-background)" stroke="currentColor" />
      <text x="250" y="150" fontSize="11">
        れき岩
      </text>
    </Frame>
  );
}

function Solar() {
  return (
    <Frame viewBox="0 0 360 170" caption="太陽高度と単位面積">
      <path d="M30 150 H330" stroke="currentColor" />
      <path d="M40 40 H300 M40 78 H300" stroke="var(--color-accent)" />
      <path d="M70 78 V150" stroke="currentColor" />
      <path d="M250 40 L300 150" stroke="currentColor" />
      <path d="M210 40 L250 150" stroke="currentColor" />
      <text x="48" y="30" fontSize="12">
        赤道側
      </text>
      <text x="250" y="30" fontSize="12">
        極側
      </text>
      <text x="55" y="166" fontSize="11">
        せまい
      </text>
      <text x="248" y="166" fontSize="11">
        広い
      </text>
    </Frame>
  );
}

function Atmosphere() {
  return (
    <Frame viewBox="0 0 360 180" caption="大気の層">
      <rect x="40" y="20" width="200" height="28" fill="var(--color-background)" stroke="currentColor" />
      <rect x="40" y="48" width="200" height="28" fill="var(--color-card)" stroke="currentColor" />
      <rect x="40" y="76" width="200" height="36" fill="var(--color-background)" stroke="currentColor" />
      <rect x="40" y="112" width="200" height="40" fill="var(--color-card)" stroke="currentColor" />
      <text x="250" y="38" fontSize="12">
        熱圏
      </text>
      <text x="250" y="66" fontSize="12">
        中間圏
      </text>
      <text x="250" y="98" fontSize="12">
        成層圏
      </text>
      <text x="118" y="98" fontSize="11" fill="var(--color-accent)">
        オゾン
      </text>
      <text x="250" y="136" fontSize="12">
        対流圏
      </text>
    </Frame>
  );
}

function Pressure() {
  return (
    <Frame viewBox="0 0 360 150" caption="机の上の3つの物体">
      <path d="M16 112 H340" stroke="currentColor" />
      <text x="24" y="132" fontSize="11">
        机
      </text>
      <rect x="36" y="62" width="70" height="50" fill="var(--color-card)" stroke="currentColor" />
      <text x="71" y="54" textAnchor="middle" fontSize="12">
        A 300N
      </text>
      <text x="71" y="92" textAnchor="middle" fontSize="11">
        x Pa
      </text>
      <text x="71" y="146" textAnchor="middle" fontSize="11">
        2m²
      </text>
      <polygon points="150,112 186,62 222,112" fill="var(--color-card)" stroke="currentColor" />
      <text x="186" y="54" textAnchor="middle" fontSize="12">
        B y N
      </text>
      <text x="186" y="100" textAnchor="middle" fontSize="11">
        30Pa
      </text>
      <text x="186" y="146" textAnchor="middle" fontSize="11">
        0.5m²
      </text>
      <polygon points="286,112 268,70 304,70" fill="var(--color-card)" stroke="currentColor" />
      <text x="286" y="54" textAnchor="middle" fontSize="12">
        C 20N
      </text>
      <text x="286" y="96" textAnchor="middle" fontSize="11">
        4Pa
      </text>
      <text x="286" y="146" textAnchor="middle" fontSize="11">
        z m²
      </text>
    </Frame>
  );
}

function Breeze() {
  return (
    <Frame viewBox="0 0 360 150" caption="昼の海岸">
      <text x="70" y="24" fontSize="13">
        昼
      </text>
      <path d="M24 110 H160 L220 110 H336" stroke="currentColor" />
      <path d="M24 110 L160 78 H220 L336 110" fill="var(--color-background)" stroke="currentColor" />
      <text x="80" y="104" fontSize="13">
        陸
      </text>
      <text x="270" y="104" fontSize="13">
        海
      </text>
      <path d="M110 78 V40" stroke="var(--color-accent)" />
      <path d="M102 50 L110 36 L118 50" fill="none" stroke="var(--color-accent)" />
      <path d="M230 92 H120" stroke="var(--color-accent)" />
      <path d="M136 84 L120 92 L136 100" fill="none" stroke="var(--color-accent)" />
    </Frame>
  );
}

function Circulation() {
  return (
    <Frame viewBox="0 0 360 180" caption="緯度と大気の流れ">
      <circle cx="180" cy="90" r="70" fill="var(--color-card)" stroke="currentColor" />
      <path d="M110 90 H250" stroke="currentColor" />
      <text x="186" y="86" fontSize="11">
        赤道
      </text>
      <text x="186" y="36" fontSize="11">
        30°
      </text>
      <text x="186" y="156" fontSize="11">
        30°
      </text>
      <path d="M180 90 V48" stroke="var(--color-accent)" />
      <path d="M150 60 H210" stroke="var(--color-accent)" />
      <path d="M150 70 V90 M210 70 V90" stroke="var(--color-accent)" />
    </Frame>
  );
}

function Saturation() {
  return (
    <Frame viewBox="0 0 360 180" caption="気温と飽和水蒸気量">
      <path d="M40 150 H320 M40 150 V20" stroke="currentColor" />
      <text x="250" y="170" fontSize="11">
        気温℃
      </text>
      <text x="8" y="24" fontSize="11">
        g/m³
      </text>
      <path d="M80 132 C140 128 180 110 210 78 S280 30 300 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
      <text x="78" y="124" fontSize="11">
        10℃ 9.4
      </text>
      <text x="150" y="96" fontSize="11">
        20℃ 17.3
      </text>
      <text x="230" y="40" fontSize="11">
        30℃ 30.4
      </text>
    </Frame>
  );
}

function Clouds() {
  return (
    <Frame viewBox="0 0 360 150" caption="上昇気流の4つの形">
      <rect x="12" y="16" width="78" height="90" fill="var(--color-card)" stroke="currentColor" />
      <path d="M40 90 V40 M58 90 V48" stroke="var(--color-accent)" />
      <text x="51" y="128" textAnchor="middle" fontSize="14">
        ア
      </text>
      <rect x="98" y="16" width="78" height="90" fill="var(--color-card)" stroke="currentColor" />
      <path d="M110 96 L150 40 H168" fill="none" stroke="currentColor" />
      <path d="M124 80 L146 52" stroke="var(--color-accent)" />
      <text x="137" y="128" textAnchor="middle" fontSize="14">
        イ
      </text>
      <rect x="184" y="16" width="78" height="90" fill="var(--color-card)" stroke="currentColor" />
      <path d="M200 90 L223 48 L246 90" fill="none" stroke="var(--color-accent)" />
      <text x="223" y="128" textAnchor="middle" fontSize="14">
        ウ
      </text>
      <rect x="270" y="16" width="78" height="90" fill="var(--color-card)" stroke="currentColor" />
      <path d="M282 96 L330 40" stroke="currentColor" />
      <path d="M286 70 L320 48" stroke="var(--color-accent)" />
      <text x="309" y="128" textAnchor="middle" fontSize="14">
        エ
      </text>
    </Frame>
  );
}

function Foehn() {
  return (
    <Frame viewBox="0 0 360 160" caption="山を越える空気">
      <path d="M20 130 L180 36 L340 130 Z" fill="var(--color-background)" stroke="currentColor" />
      <path d="M70 110 L150 60" stroke="var(--color-accent)" />
      <path d="M210 60 L290 112" stroke="var(--color-accent)" />
      <path d="M120 70 Q150 50 176 62" fill="var(--color-card)" stroke="currentColor" />
      <text x="48" y="148" fontSize="12">
        風上
      </text>
      <text x="286" y="148" fontSize="12">
        風下
      </text>
    </Frame>
  );
}

const MAP: Record<Exclude<FigureId, "none">, () => ReactNode> = {
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
  foehn: Foehn,
};

export function FigureView({ id }: { id: FigureId }) {
  if (id === "none") return null;
  const Draw = MAP[id];
  return (
    <div className="rounded-lg border border-border bg-background px-3 py-3">
      <Draw />
    </div>
  );
}
