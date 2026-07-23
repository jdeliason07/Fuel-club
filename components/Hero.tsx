import { WAITLIST } from "@/lib/constants";
import ProgressTracker from "./ProgressTracker";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40"
    >
      {/* Background: asphalt + retro glow canopies */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-asphalt via-[#0d0d0f] to-asphalt" />
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neon-red/[0.12] blur-[120px]" />
        <div className="absolute right-1/4 top-20 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-neon-blue/[0.12] blur-[120px]" />
        <div className="absolute inset-0 bg-grid-lines bg-[size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-red shadow-neon-red" />
            Members-Only Concierge Fueling
          </span>

          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Never Touch a{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-neon-red">Gas Pump</span>
            </span>{" "}
            Again.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg lg:mx-0">
            Pay{" "}
            <span className="font-bold text-white">$99/month</span>. Get{" "}
            <span className="font-bold text-neon-blue">$99/month</span> in
            C-store credits. Enjoy complete 2-window concierge fueling without
            ever leaving your car.
          </p>

          {/* trust chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {[
              "Full-service attendants",
              "Free unlimited car wash",
              "$0 net cost",
            ].map((chip) => (
              <span
                key={chip}
                className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-white/75"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right: waitlist card */}
        <div
          id="waitlist"
          className="animate-fade-up scroll-mt-28 [animation-delay:120ms]"
        >
          <div className="glass-strong mx-auto max-w-md rounded-3xl p-6 shadow-glass sm:p-8">
            <div className="mb-5">
              <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                Reserve Your Founding Spot
              </h2>
              <p className="mt-1 text-sm text-white/60">
                Join the waitlist for priority VIP access.
              </p>
            </div>

            <WaitlistForm />

            <div className="mt-6 border-t border-white/10 pt-5">
              <ProgressTracker
                claimed={WAITLIST.claimed}
                total={WAITLIST.total}
                locationLabel={WAITLIST.locationLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
