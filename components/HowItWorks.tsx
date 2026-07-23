import { STEPS, type Step } from "@/lib/constants";
import Reveal from "./Reveal";
import StationVisual from "./StationVisual";

/**
 * "How the Diagonal 2-Window Bay Works" — 3 interactive step cards
 * plus the architectural station schematic.
 */
export default function HowItWorks() {
  return (
    <section id="how" className="relative px-5 py-24 sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-asphalt-800/40 to-transparent" />
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <span className="section-label">The Experience</span>
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
            How the Diagonal{" "}
            <span className="text-neon-red">2-Window</span> Bay Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/65">
            Eight private, weather-proof 45° stalls extend straight off the
            central hub. Pull in once — get fed, fueled, and washed without
            unbuckling.
          </p>
        </Reveal>

        {/* Step cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.id} delay={i * 120} as="article">
              <StepCard step={step} />
            </Reveal>
          ))}
        </div>

        {/* Architectural schematic */}
        <Reveal delay={120} className="mt-16">
          <div id="station" className="scroll-mt-28">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Station Blueprint · 8 Stalls · 4 Per Side
            </p>
            <StationVisual />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: Step }) {
  const isRed = step.accent === "red";
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border bg-white/[0.04] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
        isRed
          ? "border-neon-red/25 hover:border-neon-red/60 hover:shadow-neon-red"
          : "border-neon-blue/25 hover:border-neon-blue/60 hover:shadow-neon-blue"
      }`}
    >
      {/* corner glow */}
      <div
        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity duration-300 ${
          isRed ? "bg-neon-red/25" : "bg-neon-blue/25"
        } opacity-60 group-hover:opacity-100`}
      />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black ${
              isRed
                ? "bg-neon-red/15 text-neon-red"
                : "bg-neon-blue/15 text-neon-blue"
            }`}
          >
            {step.id}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            {step.eyebrow}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-white">{step.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-white/65">
          {step.description}
        </p>
      </div>

      {/* bottom accent line */}
      <div
        className={`absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
          isRed ? "bg-neon-red shadow-neon-red" : "bg-neon-blue shadow-neon-blue"
        }`}
      />
    </div>
  );
}
