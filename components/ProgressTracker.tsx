"use client";

import { useEffect, useRef, useState } from "react";

type ProgressTrackerProps = {
  claimed: number;
  total: number;
  locationLabel: string;
};

/**
 * Founding-member progress. Blue primary fill (blue outweighs red).
 * Count and totals set in Space Mono, tabular (guide §06).
 */
export default function ProgressTracker({
  claimed,
  total,
  locationLabel,
}: ProgressTrackerProps) {
  const [displayed, setDisplayed] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const pct = Math.min(100, Math.round((claimed / total) * 100));

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStarted(true),
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplayed(Math.round(eased * claimed));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, claimed]);

  return (
    <div ref={ref} className="w-full">
      <div className="mb-2 flex items-end justify-between">
        <span className="mono flex items-center gap-2">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-club-red"
            aria-hidden="true"
          />
          Founding members · {locationLabel}
        </span>
        <span className="font-mono text-[11px] tabular-nums text-steel">
          {pct}%
        </span>
      </div>

      <div
        className="relative h-2 w-full overflow-hidden rounded-full"
        style={{ background: "#EAF3FC" }}
      >
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-digital"
          style={{
            width: started ? `${pct}%` : "0%",
            background: "var(--enamel-blue)",
          }}
        />
      </div>

      <p className="mt-3 font-mono text-[13px] tabular-nums text-asphalt">
        <span className="text-base font-bold">{displayed}</span>
        <span className="mx-1 text-chrome">/</span>
        <span className="text-steel">{total}</span>{" "}
        <span className="text-[11px] uppercase tracking-[0.14em] text-steel">
          spots claimed
        </span>
      </p>
    </div>
  );
}
