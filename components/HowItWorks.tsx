import { STEPS, type Step } from "@/lib/constants";
import Reveal from "./Reveal";
import StationVisual from "./StationVisual";

/**
 * How the diagonal 2-window bay works — 3 step cards + the station blueprint.
 */
export default function HowItWorks() {
  return (
    <section id="how" className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1060px]">
        <Reveal>
          <div className="eyebrow mb-3">08 — The Experience</div>
          <h2
            className="font-display font-extrabold uppercase text-asphalt"
            style={{ fontSize: "clamp(25px,4.6vw,42px)", letterSpacing: "0.03em" }}
          >
            Eight bays. Two windows.
            <br />
            You never step out.
          </h2>
          <p className="mt-3 max-w-[58ch] text-steel">
            The bays run at 45° straight off the central hub. Pull in once. Get
            fed, fueled, and washed. Then pull out.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3.5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.id} delay={i * 100} as="article">
              <StepCard step={step} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-14">
          <div id="station" className="scroll-mt-28">
            <div className="mono mb-5 text-center">
              Site Blueprint · 8 Stalls · 4 Per Side
            </div>
            <StationVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: Step }) {
  const isRed = step.accent === "red";
  const accent = isRed ? "var(--club-red)" : "var(--enamel-blue)";
  return (
    <div className="card card-bone h-full p-6">
      <div className="mb-5 flex items-center justify-between">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-bold tabular-nums"
          style={{
            color: accent,
            background: isRed ? "rgba(224,50,42,0.08)" : "rgba(11,77,162,0.08)",
          }}
        >
          {step.id}
        </span>
        <span
          className="font-display text-[11px] font-semibold uppercase tracking-[0.24em]"
          style={{ color: accent }}
        >
          {step.eyebrow}
        </span>
      </div>

      <h3
        className="font-display text-lg font-bold uppercase tracking-[0.03em] text-asphalt"
        style={{ textTransform: "none" }}
      >
        {step.title}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-steel">
        {step.description}
      </p>
    </div>
  );
}
