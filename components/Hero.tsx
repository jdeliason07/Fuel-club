import { WAITLIST } from "@/lib/constants";
import ProgressTracker from "./ProgressTracker";
import WaitlistForm from "./WaitlistForm";
import Roundel from "./Roundel";

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-white px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="mx-auto grid max-w-[1060px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <div className="mono mb-4">Members-only fueling · Est. 2026</div>

          <h1
            className="font-display font-extrabold uppercase text-asphalt"
            style={{
              fontSize: "clamp(42px,10vw,96px)",
              lineHeight: 0.94,
              letterSpacing: "0.005em",
            }}
          >
            Welcome to
            <br />
            the fuel club.
          </h1>

          <hr className="dbl my-7 max-w-[240px]" aria-hidden="true" />

          <p
            className="max-w-[54ch] text-[#404A55]"
            style={{ fontSize: "clamp(17px,2.2vw,20px)", fontWeight: 300 }}
          >
            A membership that removes the worst two minutes of the driving day.
            Fuel delivered to your car while it sits where you parked it. Your
            tank is full on Thursday because it is Thursday.
          </p>

          {/* trust chips — plain, no adjectives */}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {[
              "Full-service attendants",
              "Unlimited touchless wash",
              "$99 / month",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-steel"
                style={{ borderColor: "var(--stroke)" }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Right: waitlist card */}
        <div
          id="waitlist"
          className="animate-fade-up scroll-mt-28 [animation-delay:100ms]"
        >
          <div className="card shadow-card mx-auto max-w-md p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-4">
              <Roundel size={64} variant="compact" />
              <div>
                <h2 className="font-display text-lg font-bold uppercase tracking-[0.04em] text-asphalt">
                  Reserve Your Spot
                </h2>
                <p className="text-[13px] text-steel">
                  Join the waitlist for priority access.
                </p>
              </div>
            </div>

            <WaitlistForm />

            <hr
              className="my-5 border-0"
              style={{ height: 1, background: "var(--stroke)" }}
              aria-hidden="true"
            />

            <ProgressTracker
              claimed={WAITLIST.claimed}
              total={WAITLIST.total}
              locationLabel={WAITLIST.locationLabel}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
