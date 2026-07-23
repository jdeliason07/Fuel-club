import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      {/* Final CTA band */}
      <section className="relative px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-asphalt-800 to-asphalt p-10 text-center shadow-glass sm:p-14">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-neon-red/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-neon-blue/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
              412 in. 188 spots left.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-balance text-white/65">
              Founding members lock the $99 rate for life. When Location #1
              fills, the waitlist closes.
            </p>
            <a href="#waitlist" className="btn-neon mt-8">
              Claim My VIP Spot
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Logo className="h-7 w-auto" />

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            <a href="#roi" className="transition-colors hover:text-white">
              The $99 Math
            </a>
            <a href="#how" className="transition-colors hover:text-white">
              How It Works
            </a>
            <a href="#station" className="transition-colors hover:text-white">
              The Station
            </a>
            <a href="#vote" className="transition-colors hover:text-white">
              Vote Your City
            </a>
          </nav>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} FUEL CLUB. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
