import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { FigureView } from "@/components/figures";
import { pickBank } from "@/lib/bank";
import { isCorrect } from "@/lib/grade";
import { generateQuestion } from "@/lib/quiz.functions";
import {
  ANGLES,
  UNITS,
  pickKind,
  pickUnit,
  type QuestionKind,
  type QuizQuestion,
  type UnitId,
} from "@/lib/units";

const STORAGE_KEY = "strata-weather-drill-v1";
const MARKS = ["ア", "イ", "ウ", "エ"] as const;

type Stats = {
  answered: number;
  correct: number;
  streak: number;
  bestStreak: number;
  unitCounts: Partial<Record<UnitId, number>>;
};

const EMPTY: Stats = { answered: 0, correct: 0, streak: 0, bestStreak: 0, unitCounts: {} };

type Memory = {
  prev?: UnitId;
  recent: string[];
  kinds: QuestionKind[];
  prefetch: Promise<QuizQuestion> | null;
  ready: QuizQuestion | null;
  epoch: number;
  busy: boolean;
};

function loadStats(): Stats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Stats>;
    return {
      answered: typeof parsed.answered === "number" ? parsed.answered : 0,
      correct: typeof parsed.correct === "number" ? parsed.correct : 0,
      streak: typeof parsed.streak === "number" ? parsed.streak : 0,
      bestStreak: typeof parsed.bestStreak === "number" ? parsed.bestStreak : 0,
      unitCounts: parsed.unitCounts && typeof parsed.unitCounts === "object" ? parsed.unitCounts : {},
    };
  } catch {
    return EMPTY;
  }
}

function saveStats(stats: Stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function planFrom(stats: Stats, memory: Memory) {
  return {
    unitId: pickUnit(stats.unitCounts, memory.prev),
    kind: pickKind(memory.kinds),
    angle: ANGLES[memory.kinds.length % ANGLES.length] ?? ANGLES[0],
    recentPrompts: memory.recent.slice(-8),
  };
}

async function obtain(stats: Stats, memory: Memory): Promise<QuizQuestion> {
  const plan = planFrom(stats, memory);
  try {
    const result = await generateQuestion({ data: plan });
    if (result.ok) return result.question;
  } catch (error) {
    console.error(error);
  }
  return pickBank(plan);
}

export function DrillApp() {
  const [screen, setScreen] = useState<"lobby" | "quiz">("lobby");
  const [phase, setPhase] = useState<"loading" | "answer" | "feedback">("loading");
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const [verdict, setVerdict] = useState<boolean | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [stats, setStats] = useState<Stats>(EMPTY);
  const [ready, setReady] = useState(false);
  const [number, setNumber] = useState(0);
  const statsRef = useRef<Stats>(EMPTY);
  const memory = useRef<Memory>({ recent: [], kinds: [], prefetch: null, ready: null, epoch: 0, busy: false });
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stayRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const loaded = loadStats();
    statsRef.current = loaded;
    setStats(loaded);
    setReady(true);
  }, []);

  const commit = useCallback((next: Stats) => {
    statsRef.current = next;
    setStats(next);
    saveStats(next);
  }, []);

  const present = useCallback(
    (item: QuizQuestion) => {
      const current = statsRef.current;
      const count = (current.unitCounts[item.unitId] ?? 0) + 1;
      commit({
        ...current,
        unitCounts: { ...current.unitCounts, [item.unitId]: count },
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
    },
    [commit],
  );

  const start = useCallback(async () => {
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

  const goNext = useCallback(async () => {
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

  const submit = useCallback(() => {
    if (!question || phase !== "answer") return;
    const raw = question.kind === "choice" ? (selected ?? "") : draft;
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
      bestStreak: Math.max(current.bestStreak, streak),
    });
  }, [commit, draft, phase, question, selected]);

  const quit = useCallback(() => {
    memory.current.epoch += 1;
    memory.current.prefetch = null;
    memory.current.ready = null;
    memory.current.busy = false;
    setConfirmOpen(false);
    setScreen("lobby");
    setQuestion(null);
    setPhase("loading");
  }, []);

  useEffect(() => {
    if (phase === "answer" && question) headingRef.current?.focus();
  }, [phase, question]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Enter" || confirmOpen || phase !== "feedback") return;
      event.preventDefault();
      void goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [confirmOpen, goNext, phase]);

  const covered = UNITS.filter((unit) => (stats.unitCounts[unit.id] ?? 0) > 0).length;

  return (
    <div className="paper min-h-dvh">
      <div className="mx-auto flex min-h-dvh w-full max-w-xl flex-col px-4 pt-6 safe-pad">
        {screen === "lobby" ? (
          <Lobby
            ready={ready}
            stats={stats}
            covered={covered}
            onStart={() => void start()}
            onReset={() => commit(EMPTY)}
          />
        ) : (
          <Quiz
            phase={phase}
            question={question}
            number={number}
            covered={covered}
            stats={stats}
            selected={selected}
            draft={draft}
            verdict={verdict}
            headingRef={headingRef}
            onQuit={() => setConfirmOpen(true)}
            onSelect={setSelected}
            onDraft={setDraft}
            onSubmit={submit}
            onNext={() => void goNext()}
          />
        )}
      </div>
      <AlertDialog.Root open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="backdrop-in fixed inset-0 z-40 bg-[color-mix(in_oklab,var(--color-foreground)_40%,transparent)]" />
          <AlertDialog.Content
            className="modal-in fixed inset-x-4 top-1/2 z-50 mx-auto w-full max-w-sm rounded-xl border border-border bg-card p-4"
            onOpenAutoFocus={(event) => {
              event.preventDefault();
              stayRef.current?.focus();
            }}
          >
            <AlertDialog.Title className="font-display text-2xl text-foreground">やめますか？</AlertDialog.Title>
            <AlertDialog.Description className="mt-3 text-sm leading-relaxed text-muted">
              「はい」でロビーに戻ります。「いいえ」で、いまの問題を続けます。
            </AlertDialog.Description>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <AlertDialog.Action className="btn btn-line" onClick={quit}>
                はい
              </AlertDialog.Action>
              <AlertDialog.Cancel ref={stayRef} className="btn btn-primary">
                いいえ
              </AlertDialog.Cancel>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}

function Lobby({
  ready,
  stats,
  covered,
  onStart,
  onReset,
}: {
  ready: boolean;
  stats: Stats;
  covered: number;
  onStart: () => void;
  onReset: () => void;
}) {
  const rate = stats.answered === 0 ? "—" : `${Math.round((stats.correct / stats.answered) * 100)}%`;
  return (
    <main className="flex flex-1 flex-col">
      <p className="text-sm font-medium text-muted">中学理科</p>
      <h1 className="mt-2 font-display text-4xl leading-tight text-foreground">地層と天気のドリル</h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-foreground">
        化石、地層、大気、天気。11枚のプリントの範囲から、その場で新しい問題を作ります。同じ問題を繰り返すのではありません。
      </p>
      <div className="mt-6 rounded-xl border border-border bg-card p-4">
        <p className="text-sm leading-relaxed text-muted">
          四択と、ことばや数字の入力が混ざります。終わるまで出続けます。
        </p>
        <button className="btn btn-primary mt-4 w-full" type="button" onClick={onStart} disabled={!ready}>
          問題を始める
        </button>
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-3">
        <Stat label="正解率" value={rate} />
        <Stat label="連続" value={String(stats.streak)} />
        <Stat label="ふれた単元" value={`${covered}/${UNITS.length}`} />
      </dl>
      <ul className="mt-5 flex flex-wrap gap-2">
        {UNITS.map((unit) => {
          const seen = (stats.unitCounts[unit.id] ?? 0) > 0;
          return (
            <li
              key={unit.id}
              className={`rounded-md border px-2 py-1 text-xs ${seen ? "border-accent text-accent" : "border-border text-muted"}`}
            >
              {unit.title}
            </li>
          );
        })}
      </ul>
      <button className="btn btn-quiet mt-6 self-start px-0" type="button" onClick={onReset}>
        成績を消す
      </button>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-3">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-1 text-lg font-medium text-foreground tabular-nums">{value}</dd>
    </div>
  );
}

function Quiz({
  phase,
  question,
  number,
  covered,
  stats,
  selected,
  draft,
  verdict,
  headingRef,
  onQuit,
  onSelect,
  onDraft,
  onSubmit,
  onNext,
}: {
  phase: "loading" | "answer" | "feedback";
  question: QuizQuestion | null;
  number: number;
  covered: number;
  stats: Stats;
  selected: string | null;
  draft: string;
  verdict: boolean | null;
  headingRef: RefObject<HTMLHeadingElement | null>;
  onQuit: () => void;
  onSelect: (value: string) => void;
  onDraft: (value: string) => void;
  onSubmit: () => void;
  onNext: () => void;
}) {
  const showQuestion = question && phase !== "loading";
  return (
    <main className="flex flex-1 flex-col">
      <header className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted tabular-nums">
          {showQuestion ? `第${number}問` : "作成中"}
          <span className="px-2">·</span>
          単元 {covered}/{UNITS.length}
          <span className="px-2">·</span>
          {stats.correct}/{stats.answered}
        </p>
        <button className="btn btn-quiet min-h-11 shrink-0 px-2" type="button" onClick={onQuit}>
          やめる
        </button>
      </header>
      {phase === "loading" || !question ? (
        <div className="flex flex-1 flex-col justify-center">
          <p className="shimmer font-display text-3xl">問題を作っています</p>
          <p className="mt-3 text-sm text-muted">プリントの範囲から、いまの1問を組み立てています。</p>
        </div>
      ) : (
        <article className="mt-4 rounded-xl border border-border bg-card p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-background px-2 py-1 text-xs text-muted">{question.unitTitle}</span>
            <span className="rounded-md bg-background px-2 py-1 text-xs text-muted">
              {question.kind === "choice" ? "四択" : "入力"}
            </span>
          </div>
          {question.figure !== "none" ? (
            <div className="mt-4">
              <FigureView id={question.figure} />
            </div>
          ) : null}
          <h2 ref={headingRef} tabIndex={-1} className="mt-4 text-lg leading-relaxed font-medium text-foreground outline-none">
            {question.prompt}
          </h2>
          {question.kind === "choice" ? (
            <div className="mt-4 grid gap-2" role="group" aria-label="選択肢">
              {question.choices.map((choice, index) => {
                const mark = MARKS[index] ?? String(index + 1);
                let tone = "";
                if (phase === "feedback") {
                  if (isCorrect(question, choice)) tone = "choice-right";
                  else if (choice === selected) tone = "choice-wrong";
                } else if (choice === selected) {
                  tone = "choice-on";
                }
                return (
                  <button
                    key={choice}
                    type="button"
                    className={`btn btn-line flex h-auto min-h-11 items-start justify-start py-2 text-left whitespace-normal ${tone}`}
                    disabled={phase === "feedback"}
                    onClick={() => onSelect(choice)}
                  >
                    <span className="mr-3 inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-border text-sm">
                      {mark}
                    </span>
                    <span className="leading-snug">{choice}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <label className="mt-4 block">
              <span className="text-sm text-muted">答え</span>
              <input
                className="mt-2 min-h-11 w-full rounded-lg border border-border bg-background px-3 text-base text-foreground outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                value={draft}
                disabled={phase === "feedback"}
                autoComplete="off"
                spellCheck={false}
                inputMode="text"
                placeholder="ことば、または数字"
                onChange={(event) => onDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    onSubmit();
                  }
                }}
              />
            </label>
          )}
          {phase === "answer" ? (
            <button
              className="btn btn-primary mt-4 w-full"
              type="button"
              onClick={onSubmit}
              disabled={question.kind === "choice" ? !selected : draft.trim().length === 0}
            >
              答える
            </button>
          ) : (
            <div className="mt-4 rounded-lg border border-border bg-background p-3" aria-live="polite">
              <p className={`font-medium ${verdict ? "text-accent" : "text-danger"}`}>{verdict ? "正解" : "不正解"}</p>
              {!verdict ? (
                <p className="mt-2 text-sm text-foreground">
                  あなたの答え　{question.kind === "choice" ? selected : draft}
                </p>
              ) : null}
              <p className="mt-2 text-sm text-foreground">
                答え　{question.answer}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{question.explanation}</p>
              {question.source === "bank" ? (
                <p className="mt-2 text-xs text-subtle">通信できなかったので、プリントの確認問題です。</p>
              ) : null}
              <button className="btn btn-primary mt-4 w-full" type="button" onClick={onNext}>
                次の問題
              </button>
            </div>
          )}
        </article>
      )}
    </main>
  );
}
