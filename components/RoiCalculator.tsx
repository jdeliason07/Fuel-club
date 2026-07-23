"use client";

import { useState } from "react";
import { ROI_ROWS } from "@/lib/constants";
import Reveal from "./Reveal";

/**
 * The $99 No-Brainer ROI Calculator.
 * Interactive breakdown showing membership fee offset by store credit +
 * free car wash, netting out to $0 for the concierge service.
 */
export default function RoiCalculator() {
  const [washesPerMonth, setWashesPerMonth] = useState(4);
  const washValue = 15; // retail value of one touchless wash
  const savedOnWashes = washesPerMonth * washValue;

  return (
    <section id="roi" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <span className="section-label">The $99 No-Brainer</span>
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
            The Math That Makes It{" "}
            <span className="text-neon-blue">Free</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/65">
            Your membership pays for itself before you even count the car wash.
            Here&apos;s the breakdown, line by line.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="glass-strong overflow-hidden rounded-3xl">
            <div className="divide-y divide-white/10">
              {ROI_ROWS.map((row) => (
                <RoiLine key={row.label} {...row} />
              ))}

              {/* Interactive wash slider bonus */}
              <div className="px-6 py-6 sm:px-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Car washes per month
                    </p>
                    <p className="text-xs text-white/50">
                      Retail value ~${washValue} each — yours free.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-4 sm:mt-0">
                    <input
                      type="range"
                      min={0}
                      max={12}
                      value={washesPerMonth}
                      onChange={(e) =>
                        setWashesPerMonth(Number(e.target.value))
                      }
                      className="h-1.5 w-40 cursor-pointer appearance-none rounded-full bg-white/15 accent-neon-blue"
                      aria-label="Car washes per month"
                    />
                    <span className="w-24 text-right text-sm font-bold text-neon-blue">
                      +${savedOnWashes}
                      <span className="text-white/40">/mo</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Net total */}
            <div className="flex items-center justify-between bg-gradient-to-r from-neon-red/10 via-transparent to-neon-blue/10 px-6 py-7 sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Net cost for concierge service
                </p>
                <p className="mt-1 text-3xl font-black text-white sm:text-4xl">
                  $0
                  <span className="ml-2 text-base font-semibold text-white/50">
                    /month
                  </span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-white/50">
                  Effective value
                </p>
                <p className="text-2xl font-black text-neon-blue sm:text-3xl">
                  +${savedOnWashes}
                </p>
                <p className="text-xs text-white/40">in your pocket</p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-white/40">
            You spend $99 and get $99 back in credits you&apos;d spend on coffee
            &amp; snacks anyway — concierge fueling and the car wash come free.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function RoiLine({
  label,
  detail,
  amount,
  kind,
}: (typeof ROI_ROWS)[number]) {
  const display =
    kind === "bonus"
      ? "FREE"
      : `${amount < 0 ? "-" : "+"}$${Math.abs(amount)}`;
  const color =
    kind === "charge"
      ? "text-white"
      : kind === "credit"
      ? "text-neon-red"
      : "text-neon-blue";

  return (
    <div className="flex items-center justify-between px-6 py-5 transition-colors hover:bg-white/[0.03] sm:px-8">
      <div className="flex items-center gap-4">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full text-lg font-black ${
            kind === "charge"
              ? "bg-white/10 text-white"
              : kind === "credit"
              ? "bg-neon-red/15 text-neon-red"
              : "bg-neon-blue/15 text-neon-blue"
          }`}
        >
          {kind === "charge" ? "$" : kind === "credit" ? "−" : "★"}
        </span>
        <div>
          <p className="text-sm font-semibold text-white sm:text-base">
            {label}
          </p>
          <p className="text-xs text-white/50">{detail}</p>
        </div>
      </div>
      <span className={`text-base font-bold tabular-nums sm:text-lg ${color}`}>
        {display}
      </span>
    </div>
  );
}
