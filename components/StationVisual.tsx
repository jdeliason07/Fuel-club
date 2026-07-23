"use client";

/**
 * Architectural top-down schematic of a FUEL CLUB station:
 * a long central micro-fulfillment building with 8 angled 45° drive-thru
 * stalls (4 per side). Driver-side canopy glows neon red, fuel-side neon blue.
 * Each stall shows its dual service windows (front food/drink, rear fuel).
 */
export default function StationVisual() {
  const stalls = [0, 1, 2, 3];

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* asphalt pad */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-asphalt-800 bg-grid-lines bg-[size:28px_28px] p-6 shadow-glass sm:p-10">
        {/* ambient glows */}
        <div className="pointer-events-none absolute -left-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-neon-red/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-neon-blue/20 blur-3xl" />

        <div className="relative flex items-stretch justify-center gap-2 sm:gap-4">
          {/* LEFT — driver side (RED) */}
          <StallColumn side="left" accent="red" stalls={stalls} />

          {/* CENTRAL micro-fulfillment building */}
          <div className="relative flex w-16 flex-col items-center justify-center rounded-lg border border-white/20 bg-gradient-to-b from-white/95 to-white/80 py-4 shadow-[0_0_25px_rgba(255,255,255,0.15)] sm:w-24">
            <div className="rotate-180 [writing-mode:vertical-rl] text-center text-[9px] font-black uppercase tracking-[0.25em] text-asphalt sm:text-xs">
              Micro-Fulfillment
            </div>
            <div className="mt-2 h-1 w-6 rounded-full bg-neon-red/70 shadow-neon-red sm:w-8" />
            <div className="mt-1 h-1 w-6 rounded-full bg-neon-blue/70 shadow-neon-blue sm:w-8" />
          </div>

          {/* RIGHT — fuel side (BLUE) */}
          <StallColumn side="right" accent="blue" stalls={stalls} />
        </div>

        {/* Legend */}
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium text-white/70">
          <LegendDot color="red" label="Driver-side canopy" />
          <LegendDot color="blue" label="Fuel-side canopy" />
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-white" />
            8 private 45° stalls · dual windows
          </span>
        </div>
      </div>
    </div>
  );
}

function StallColumn({
  side,
  accent,
  stalls,
}: {
  side: "left" | "right";
  accent: "red" | "blue";
  stalls: number[];
}) {
  const isLeft = side === "left";
  const glow =
    accent === "red"
      ? "shadow-neon-red border-neon-red/60"
      : "shadow-neon-blue border-neon-blue/60";
  const canopy = accent === "red" ? "bg-neon-red" : "bg-neon-blue";
  const skew = isLeft ? "-skew-y-[18deg]" : "skew-y-[18deg]";

  return (
    <div className="flex flex-1 flex-col gap-2 sm:gap-3">
      {stalls.map((i) => (
        <div
          key={i}
          className={`group relative flex h-12 items-center overflow-hidden rounded-md border bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.07] sm:h-14 ${glow} ${skew}`}
          style={{ animationDelay: `${i * 90}ms` }}
        >
          {/* neon canopy edge (toward outside) */}
          <div
            className={`absolute inset-y-0 ${
              isLeft ? "left-0" : "right-0"
            } w-1 ${canopy} animate-neon-pulse`}
          />

          {/* dual service windows */}
          <div
            className={`flex w-full items-center justify-between px-2 ${
              isLeft ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* front window (food/drink) */}
            <span
              className="h-4 w-2.5 rounded-sm bg-white/90 sm:h-5 sm:w-3"
              title="Front window — food & drink"
            />
            {/* car body */}
            <span className="mx-1 h-2.5 w-6 rounded-full bg-white/25 sm:w-8" />
            {/* rear window (fuel) */}
            <span
              className={`h-4 w-2.5 rounded-sm sm:h-5 sm:w-3 ${
                accent === "red" ? "bg-neon-red/80" : "bg-neon-blue/80"
              }`}
              title="Rear window — full-service fuel"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function LegendDot({ color, label }: { color: "red" | "blue"; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className={`inline-block h-2.5 w-2.5 rounded-full ${
          color === "red"
            ? "bg-neon-red shadow-neon-red"
            : "bg-neon-blue shadow-neon-blue"
        }`}
      />
      {label}
    </span>
  );
}
