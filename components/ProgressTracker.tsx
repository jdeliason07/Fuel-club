"use client";

import { useEffect, useRef, useState } from "react";

type ProgressTrackerProps = {
  claimed: number;
  total: number;
  locationLabel: string;
};

/**
 * Live VIP membership progress bar with count-up + animated neon fill.
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
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutCubic
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
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-red opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-red" />
          </span>
          Live · {locationLabel}
        </span>
        <span className="text-xs font-medium text-white/50">{pct}% full</span>
      </div>

      <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{
            width: started ? `${pct}%` : "0%",
            background:
              "linear-gradient(90deg, #FF0033 0%, #FF2D55 45%, #0066FF 100%)",
            boxShadow:
              "0 0 10px rgba(255,0,51,0.7), 0 0 22px rgba(0,102,255,0.5)",
          }}
        />
      </div>

      <p className="mt-3 text-sm text-white/80">
        <span className="text-lg font-extrabold tabular-nums text-white">
          {displayed}
        </span>
        <span className="mx-1 text-white/40">/</span>
        <span className="font-semibold text-white/70">{total}</span>{" "}
        <span className="font-medium text-white/60">
          VIP Membership Spots Claimed
        </span>
      </p>
    </div>
  );
}
