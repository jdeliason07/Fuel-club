"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Waitlist capture — Email, ZIP, Vehicle Make/Model.
 * One primary action per screen (guide §10). Light fields, pill primary.
 */
export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ email: "", zip: "", vehicle: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email.";
    if (!/^\d{5}$/.test(form.zip)) next.zip = "Enter a 5-digit ZIP.";
    if (form.vehicle.trim().length < 2)
      next.vehicle = "Enter your make and model.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Simulated network call — wire to a real route (/api/waitlist).
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  };

  const update =
    (key: keyof typeof form) => (e: { target: { value: string } }) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  if (status === "success") {
    return (
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
        <h3 className="font-display text-xl font-bold uppercase tracking-[0.03em] text-asphalt">
          You&apos;re on the list
        </h3>
        <p className="mt-2 max-w-sm text-sm text-steel">
          Welcome, member. We email{" "}
          <span className="font-mono text-[13px] text-asphalt">
            {form.email}
          </span>{" "}
          the moment your site opens priority access.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
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
          className="field"
        />
        {errors.email && (
          <p className="mt-1.5 px-1 text-xs font-medium text-enamel-red">
            {errors.email}
          </p>
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
            className="field"
          />
          {errors.zip && (
            <p className="mt-1.5 px-1 text-xs font-medium text-enamel-red">
              {errors.zip}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="vehicle" className="sr-only">
            Vehicle make and model
          </label>
          <input
            id="vehicle"
            type="text"
            placeholder="Vehicle make & model"
            value={form.vehicle}
            onChange={update("vehicle")}
            className="field"
          />
          {errors.vehicle && (
            <p className="mt-1.5 px-1 text-xs font-medium text-enamel-red">
              {errors.vehicle}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-1 w-full"
      >
        {status === "submitting" ? "Reserving your spot" : "Reserve My Spot"}
      </button>

      <p className="text-center text-xs text-steel">
        No payment today. Founding members hold the $99 rate.
      </p>
    </form>
  );
}
