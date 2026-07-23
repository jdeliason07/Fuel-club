"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 focus:border-neon-blue/70 focus:bg-white/[0.09] focus:shadow-[0_0_0_3px_rgba(0,102,255,0.15)]";

/**
 * Interactive waitlist capture — Email, Zip Code, Vehicle Make/Model.
 * Includes client-side validation + a mock async submit with success state.
 */
export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ email: "", zip: "", vehicle: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!/^\d{5}$/.test(form.zip)) next.zip = "5-digit ZIP required.";
    if (form.vehicle.trim().length < 2)
      next.vehicle = "Tell us your make & model.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Simulated network call — swap for a real API route (/api/waitlist).
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("success");
  };

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  if (status === "success") {
    return (
      <div className="glass-strong flex flex-col items-center rounded-2xl px-6 py-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-neon-blue/15 shadow-neon-blue">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-neon-blue"
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
        <h3 className="text-xl font-extrabold text-white">You&apos;re on the list.</h3>
        <p className="mt-2 max-w-sm text-sm text-white/70">
          Welcome to the club, VIP. We&apos;ll email{" "}
          <span className="font-semibold text-white">{form.email}</span> the
          moment your location unlocks priority access.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`flex flex-col gap-3 ${compact ? "" : ""}`}
    >
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Email address"
          value={form.email}
          onChange={update("email")}
          className={inputClass}
        />
        {errors.email && (
          <p className="mt-1 text-xs font-medium text-neon-red">{errors.email}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="zip" className="sr-only">
            ZIP code
          </label>
          <input
            id="zip"
            type="text"
            inputMode="numeric"
            maxLength={5}
            autoComplete="postal-code"
            placeholder="ZIP code"
            value={form.zip}
            onChange={update("zip")}
            className={inputClass}
          />
          {errors.zip && (
            <p className="mt-1 text-xs font-medium text-neon-red">{errors.zip}</p>
          )}
        </div>

        <div>
          <label htmlFor="vehicle" className="sr-only">
            Vehicle make & model
          </label>
          <input
            id="vehicle"
            type="text"
            placeholder="Vehicle make & model"
            value={form.vehicle}
            onChange={update("vehicle")}
            className={inputClass}
          />
          {errors.vehicle && (
            <p className="mt-1 text-xs font-medium text-neon-red">
              {errors.vehicle}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-neon mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Reserving your spot…
          </span>
        ) : (
          "Claim My VIP Spot"
        )}
      </button>

      <p className="text-center text-[11px] leading-relaxed text-white/40">
        No payment today. Founding members lock in the $99 rate for life.
      </p>
    </form>
  );
}
