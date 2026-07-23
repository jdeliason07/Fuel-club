import Wordmark from "./Wordmark";
import Roundel from "./Roundel";

export default function Footer() {
  return (
    <>
      {/* Final CTA band — night roundel, one primary action */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-[1060px]">
          <div
            className="relative overflow-hidden rounded-card px-6 py-12 text-center sm:px-14 sm:py-16"
            style={{ background: "var(--asphalt)" }}
          >
            <hr className="dbl absolute inset-x-0 top-0" aria-hidden="true" />
            <div className="flex flex-col items-center">
              <Roundel size={92} variant="night" />
              <p className="mono mt-6" style={{ color: "var(--chrome)" }}>
                412 in · 188 spots left · Site 01
              </p>
              <h2
                className="mt-3 font-display font-extrabold uppercase text-white"
                style={{ fontSize: "clamp(24px,4.4vw,40px)", letterSpacing: "0.03em" }}
              >
                Founding members
                <br />
                hold the $99 rate.
              </h2>
              <p className="mt-3 max-w-md text-sm" style={{ color: "var(--chrome)" }}>
                When Site 01 fills, the founding list closes.
              </p>
              <a
                href="#waitlist"
                className="btn-primary mt-8"
                style={{ background: "var(--neon-blue)" }}
              >
                Reserve My Spot
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="dbl" aria-hidden="true" />

      <footer className="bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1060px] flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#top" aria-label="The Fuel Club home">
            <Wordmark />
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              ["#value", "The Math"],
              ["#how", "How It Works"],
              ["#station", "The Station"],
              ["#vote", "Vote Your City"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-steel transition-colors hover:text-club-red"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mx-auto mt-8 max-w-[1060px] text-[12px] text-steel">
          The Fuel Club — {new Date().getFullYear()} · Figures shown are
          formatting examples, not verified claims.
        </p>
      </footer>
    </>
  );
}
