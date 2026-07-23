"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CITIES } from "@/lib/constants";
import Reveal from "./Reveal";

type VoteState = Record<string, number>;

// Seeded starting votes so the leaderboard reads as live.
const SEED: VoteState = {
  "Austin, TX": 1840,
  "Miami, FL": 1512,
  "Scottsdale, AZ": 1203,
  "Nashville, TN": 967,
  "Denver, CO": 811,
};

/**
 * City / ZIP registration — members vote to unlock the next site.
 * Blue-primary leaderboard bars; the leader gets a subordinate red rule.
 */
export default function CityVote() {
  const [votes, setVotes] = useState<VoteState>(SEED);
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState("");

  const ranked = useMemo(
    () => Object.entries(votes).sort((a, b) => b[1] - a[1]),
    [votes]
  );
  const max = ranked[0]?.[1] ?? 1;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = city.trim();
    if (name.length < 2) {
      setError("Enter your city.");
      return;
    }
    if (!/^\d{5}$/.test(zip)) {
      setError("Enter a 5-digit ZIP.");
      return;
    }
    setError("");
    setVotes((v) => {
      const key =
        Object.keys(v).find((k) => k.toLowerCase() === name.toLowerCase()) ??
        name;
      return { ...v, [key]: (v[key] ?? 0) + 1 };
    });
    setVoted(true);
    setCity("");
    setZip("");
  };

  return (
    <section id="vote" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1060px]">
        <Reveal>
          <div className="eyebrow mb-3">Unlock The Next Site</div>
          <h2
            className="font-display font-extrabold uppercase text-asphalt"
            style={{ fontSize: "clamp(25px,4.6vw,42px)", letterSpacing: "0.03em" }}
          >
            Vote your city
            <br />
            to the front.
          </h2>
          <p className="mt-3 max-w-[58ch] text-steel">
            We build where demand is loudest. Register your city and ZIP. The
            top city unlocks Site 02.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Vote form */}
          <Reveal className="card shadow-card p-6 sm:p-7">
            {voted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ background: "rgba(11,77,162,0.08)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="var(--enamel-blue)"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.03em] text-asphalt">
                  Vote counted
                </h3>
                <p className="mt-2 max-w-xs text-sm text-steel">
                  Thanks for raising your hand. Watch the leaderboard, and tell
                  a neighbor to vote too.
                </p>
                <button
                  onClick={() => setVoted(false)}
                  className="btn-secondary mt-6 !h-11"
                >
                  Vote Another City
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div>
                  <label htmlFor="city" className="eyebrow mb-2 block">
                    Your City
                  </label>
                  <input
                    id="city"
                    list="city-options"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Austin, TX"
                    className="field"
                  />
                  <datalist id="city-options">
                    {CITIES.map((c) => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label htmlFor="vote-zip" className="eyebrow mb-2 block">
                    ZIP Code
                  </label>
                  <input
                    id="vote-zip"
                    inputMode="numeric"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="ZIP code"
                    className="field"
                  />
                </div>

                {error && (
                  <p className="text-xs font-medium text-enamel-red">{error}</p>
                )}

                <button type="submit" className="btn-primary w-full">
                  Cast My Vote
                </button>
              </form>
            )}
          </Reveal>

          {/* Leaderboard */}
          <Reveal delay={100} className="card shadow-card p-6 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-asphalt">
                City Leaderboard
              </h3>
              <span className="mono">Live votes</span>
            </div>

            <ol className="flex flex-col gap-4">
              {ranked.map(([name, count], i) => {
                const leader = i === 0;
                return (
                  <li key={name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm font-semibold text-asphalt">
                        <span className="font-mono text-[11px] tabular-nums text-chrome">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {name}
                      </span>
                      <span className="font-mono text-[13px] tabular-nums text-steel">
                        {count.toLocaleString()}
                      </span>
                    </div>
                    <div
                      className="h-2 w-full overflow-hidden rounded-full"
                      style={{ background: "#EAF3FC" }}
                    >
                      <div
                        className="h-full rounded-full transition-[width] duration-700 ease-digital"
                        style={{
                          width: `${Math.max(6, (count / max) * 100)}%`,
                          background: "var(--enamel-blue)",
                        }}
                      />
                    </div>
                    {leader && (
                      <div
                        className="mt-1 h-[2px] rounded-full"
                        style={{
                          width: "32%",
                          background: "var(--club-red)",
                          opacity: 0.6,
                        }}
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
