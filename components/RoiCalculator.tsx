"use client";

import { useState } from "react";
import { VALUE } from "@/lib/constants";
import Reveal from "./Reveal";

/**
 * The value equation — canonical form (guide §06).
 *   Membership  −  Value delivered  =  Your net
 * Blue for what you pay, red for what you gain. Jost tabular for display
 * prices. Line items itemized beneath. Auditable in four seconds.
 */
export default function RoiCalculator() {
  // The one auditable variable: fill-ups per month drives the fuel line.
  const [fillUps, setFillUps] = useState(5);
  const perFillSaving = 2; // member fuel rate saving per fill-up

  const credit = 99; // C-store credit
  const wash = 18; // touchless wash value
  const fuel = fillUps * perFillSaving; // full-service fuel delivery value
  const delivered = credit + wash + fuel;
  const net = delivered - VALUE.membership;

  const money = (n: number) => `$${n}`;

  return (
    <section id="value" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1060px]">
        <Reveal>
          <div className="eyebrow mb-3">06 — The Numbers</div>
          <h2
            className="font-display font-extrabold uppercase text-asphalt"
            style={{ fontSize: "clamp(25px,4.6vw,42px)", letterSpacing: "0.03em" }}
          >
            Show the math.
            <br />
            Never claim the win.
          </h2>
          <p className="mt-3 max-w-[58ch] text-steel">
            Skepticism is the buyer&apos;s default. The counter is not
            adjectives — it is arithmetic you can audit in four seconds.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="card shadow-card mt-10 p-6 sm:p-9">
            <div className="eyebrow mb-6">Value equation — canonical form</div>

            {/* The equation */}
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-5">
              <EqTerm label="Membership" value={money(VALUE.membership)} tone="pay" />
              <Operator symbol="−" />
              <EqTerm label="Value delivered" value={money(delivered)} tone="blue" />
              <Operator symbol="=" />
              <EqTerm label="Your net" value={`+${money(net)}`} tone="gain" />
            </div>

            <hr
              className="my-8 border-0"
              style={{ height: 1, background: "var(--stroke)" }}
              aria-hidden="true"
            />

            {/* Itemized beneath */}
            <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2">
              <LineItem
                label="C-store credit"
                detail="Coffee, snacks, energy — spent anyway"
                value={money(credit)}
              />
              <LineItem
                label="Unlimited touchless wash"
                detail="Retail value, included"
                value={money(wash)}
              />
              <LineItem
                label="Full-service fuel delivery"
                detail={`${fillUps} fill-ups · member rate`}
                value={money(fuel)}
              />
              <LineItem
                label="Membership fee"
                detail="Billed monthly, no contract"
                value={`−${money(VALUE.membership)}`}
                pay
              />
            </div>

            {/* One auditable control */}
            <div
              className="mt-8 flex flex-col gap-3 rounded-card p-5 sm:flex-row sm:items-center sm:justify-between"
              style={{ background: "var(--porcelain)" }}
            >
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-[0.06em] text-asphalt">
                  Fill-ups per month
                </p>
                <p className="text-[13px] text-steel">
                  Saves about ${perFillSaving}.00 each at the member rate.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={0}
                  max={12}
                  value={fillUps}
                  onChange={(e) => setFillUps(Number(e.target.value))}
                  className="h-1.5 w-40 cursor-pointer appearance-none rounded-full"
                  style={{ accentColor: "var(--enamel-blue)", background: "#EAF3FC" }}
                  aria-label="Fill-ups per month"
                />
                <span className="w-12 text-right font-mono text-sm tabular-nums text-enamel-blue">
                  {fillUps}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[13px] text-steel">
            Every figure sourced and dated in production. Figures shown are
            formatting examples, not verified claims.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function EqTerm({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "pay" | "blue" | "gain";
}) {
  const color =
    tone === "blue"
      ? "var(--enamel-blue)"
      : tone === "gain"
      ? "var(--club-red)"
      : "var(--asphalt)";
  return (
    <div>
      <div className="mb-1 text-[13px] text-steel">{label}</div>
      <div
        className="font-display font-extrabold tabular-nums"
        style={{
          fontSize: "clamp(40px,8vw,72px)",
          lineHeight: 1,
          letterSpacing: "-0.005em",
          color,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Operator({ symbol }: { symbol: string }) {
  return (
    <div
      className="font-display font-bold text-chrome"
      style={{ fontSize: "clamp(28px,4vw,40px)", lineHeight: 1 }}
      aria-hidden="true"
    >
      {symbol}
    </div>
  );
}

function LineItem({
  label,
  detail,
  value,
  pay = false,
}: {
  label: string;
  detail: string;
  value: string;
  pay?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-stroke pb-3">
      <div>
        <p className="font-display text-sm font-semibold uppercase tracking-[0.05em] text-asphalt">
          {label}
        </p>
        <p className="text-[12.5px] text-steel">{detail}</p>
      </div>
      <span
        className="font-mono text-sm tabular-nums"
        style={{ color: pay ? "var(--asphalt)" : "var(--enamel-blue)" }}
      >
        {value}
      </span>
    </div>
  );
}
