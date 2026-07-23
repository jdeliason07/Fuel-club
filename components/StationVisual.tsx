"use client";

/**
 * Top-down blueprint of a Fuel Club site.
 * A long white porcelain micro-fulfillment building with 8 angled 45° stalls
 * (4 per side). Blue is the primary perimeter accent at full weight; red is
 * the subordinate crown line (guide §04 — blue always outweighs red).
 * Each stall shows its dual ports: front (food/drink) and rear (fuel).
 */
export default function StationVisual() {
  const stalls = [0, 1, 2, 3];

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div
        className="relative overflow-hidden rounded-card border p-5 sm:p-8"
        style={{
          borderColor: "var(--stroke)",
          background:
            "var(--porcelain) linear-gradient(var(--stroke) 1px, transparent 1px) 0 0 / 100% 26px",
        }}
      >
        {/* grid ground */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(90deg, var(--stroke) 1px, transparent 1px)",
            backgroundSize: "26px 100%",
          }}
          aria-hidden="true"
        />

        <div className="relative flex items-stretch justify-center gap-2 sm:gap-4">
          {/* LEFT — driver side */}
          <StallColumn side="left" stalls={stalls} />

          {/* CENTRAL micro-fulfillment building — porcelain white */}
          <div
            className="relative flex w-16 flex-col items-center justify-center rounded-lg border bg-white py-4 shadow-card sm:w-24"
            style={{ borderColor: "var(--enamel-blue)" }}
          >
            {/* subordinate red crown line along the top */}
            <span
              className="absolute inset-x-2 top-1.5 h-[2px] rounded-full"
              style={{ background: "var(--club-red)", opacity: 0.6 }}
              aria-hidden="true"
            />
            <span
              className="font-display text-center text-[9px] font-bold uppercase tracking-[0.22em] text-enamel-blue sm:text-[11px]"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Micro-Fulfillment
            </span>
          </div>

          {/* RIGHT — fuel side */}
          <StallColumn side="right" stalls={stalls} />
        </div>

        {/* Legend */}
        <div className="relative mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-steel">
          <LegendDot color="var(--enamel-blue)" label="Blue primary — full perimeter" />
          <LegendDot color="var(--club-red)" label="Red crown — subordinate" />
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-2.5 rounded-sm bg-white"
              style={{ border: "1px solid var(--stroke)" }}
            />
            8 stalls · dual windows
          </span>
        </div>
      </div>
    </div>
  );
}

function StallColumn({
  side,
  stalls,
}: {
  side: "left" | "right";
  stalls: number[];
}) {
  const isLeft = side === "left";
  const skew = isLeft ? "-skew-y-[18deg]" : "skew-y-[18deg]";

  return (
    <div className="flex flex-1 flex-col gap-2.5 sm:gap-3">
      {stalls.map((i) => (
        <div
          key={i}
          className={`group relative flex h-12 items-center overflow-hidden rounded-md border bg-white transition-colors duration-200 hover:bg-porcelain sm:h-14 ${skew}`}
          style={{ borderColor: "var(--enamel-blue)" }}
        >
          {/* blue primary canopy edge (toward outside) — full weight */}
          <div
            className={`absolute inset-y-0 ${isLeft ? "left-0" : "right-0"} w-1.5 animate-breathe`}
            style={{ background: "var(--enamel-blue)" }}
            aria-hidden="true"
          />
          {/* red crown — subordinate thin line */}
          <div
            className={`absolute inset-y-1.5 ${isLeft ? "left-2" : "right-2"} w-[2px]`}
            style={{ background: "var(--club-red)", opacity: 0.6 }}
            aria-hidden="true"
          />

          {/* dual service windows */}
          <div
            className={`flex w-full items-center justify-between px-2.5 ${
              isLeft ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* front window (food/drink) */}
            <span
              className="h-4 w-2.5 rounded-sm sm:h-5 sm:w-3"
              style={{ background: "var(--neon-blue)" }}
              title="Front window — food & drink"
            />
            {/* car body */}
            <span
              className="mx-1 h-2.5 w-6 rounded-full sm:w-8"
              style={{ background: "var(--chrome)" }}
            />
            {/* rear window (fuel) */}
            <span
              className="h-4 w-2.5 rounded-sm sm:h-5 sm:w-3"
              style={{ background: "var(--club-red)" }}
              title="Rear window — full-service fuel"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
