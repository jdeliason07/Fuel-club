"use client";

import { useMemo, useState, type FormEvent } from "react";
import { CITIES } from "@/lib/constants";
import Reveal from "./Reveal";

type VoteState = Record<string, number>;

// Seeded starting votes so the leaderboard feels alive.
const SEED: VoteState = {
  "Austin, TX": 1840,
  "Miami, FL": 1512,
  "Scottsdale, AZ": 1203,
  "Nashville, TN": 967,
  "Denver, CO": 811,
};

/**
 * City / Zip Code Registration — prospective members vote for their city
 * to unlock the next FUEL CLUB location.
 */
export default function CityVote() {
  const [votes, setVotes] = useState<VoteState>(SEED);
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState("");

  const ranked = useMemo(
    () =>
      Object.entries(votes).sort((a, b) => b[1] - a[1]),
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
      setError("5-digit ZIP required.");
      return;
    }
    setError("");
    setVotes((v) => {
      // match existing city (case-insensitive) or add new
      const key =
        Object.keys(v).find(
          (k) => k.toLowerCase() === name.toLowerCase()
        ) ?? name;
      return { ...v, [key]: (v[key] ?? 0) + 1 };
    });
    setVoted(true);
    setCity("");
    setZip("");
  };

  return (
    <section id="vote" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <span className="section-label">Unlock The Next Location</span>
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
            Vote Your City to the{" "}
            <span className="text-neon-red">Front</span> of the Line.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/65">
            We build where demand is loudest. Register your city &amp; ZIP —
            the top city unlocks FUEL CLUB Location #2.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Vote form */}
          <Reveal className="glass-strong rounded-3xl p-6 sm:p-8">
            {voted ? (
              <div className="flex flex-col items-center py-6 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-neon-red/15 shadow-neon-red">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-neon-red"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  Vote counted!
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/65">
                  Thanks for raising your hand. Watch the leaderboard climb —
                  and tell a neighbor to vote too.
                </p>
                <button
                  onClick={() => setVoted(false)}
                  className="btn-outline mt-6 !px-6 !py-2.5 text-xs"
                >
                  Vote Another City
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60"
                  >
                    Your City
                  </label>
                  <input
                    id="city"
                    list="city-options"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Austin, TX"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-neon-red/70 focus:bg-white/[0.09] focus:shadow-[0_0_0_3px_rgba(255,0,51,0.15)]"
                  />
                  <datalist id="city-options">
                    {CITIES.map((c) => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                </div>

                <div>
                  <label
                    htmlFor="vote-zip"
                    className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60"
                  >
                    ZIP Code
                  </label>
                  <input
                    id="vote-zip"
                    inputMode="numeric"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="ZIP code"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-neon-red/70 focus:bg-white/[0.09] focus:shadow-[0_0_0_3px_rgba(255,0,51,0.15)]"
                  />
                </div>

                {error && (
                  <p className="text-xs font-medium text-neon-red">{error}</p>
                )}

                <button type="submit" className="btn-neon w-full">
                  Cast My Vote
                </button>
              </form>
            )}
          </Reveal>

          {/* Leaderboard */}
          <Reveal delay={100} className="glass rounded-3xl p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/70">
                City Leaderboard
              </h3>
              <span className="text-[11px] font-medium text-white/40">
                Live votes
              </span>
            </div>

            <ol className="flex flex-col gap-4">
              {ranked.map(([name, count], i) => (
                <li key={name}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 font-semibold text-white">
                      <span className="text-xs font-black text-white/40">
                        {i + 1}
                      </span>
                      {name}
                    </span>
                    <span className="tabular-nums text-white/60">
                      {count.toLocaleString()}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full transition-[width] duration-700 ease-out"
                      style={{
                        width: `${Math.max(6, (count / max) * 100)}%`,
                        background:
                          i === 0
                            ? "linear-gradient(90deg,#FF0033,#FF2D55)"
                            : "linear-gradient(90deg,#0066FF,#3388FF)",
                        boxShadow:
                          i === 0
                            ? "0 0 10px rgba(255,0,51,0.5)"
                            : "0 0 10px rgba(0,102,255,0.4)",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
