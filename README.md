# The Fuel Club — Pre-Launch Landing & Waitlist

A responsive pre-launch landing page and waitlist web app for **The Fuel Club**,
a members-only concierge fueling club. Built to **Brand Standards v3.0** — the
porcelain-enamel, retro service-station system.

> **Never touch a gas pump again.** A membership that removes the worst two
> minutes of the American driving day. $99 a month.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom brand design system, no external UI dependencies
- Fonts: **Jost** (display), **Yellowtail** (script), **Inter** (body),
  **Space Mono** (data)

## Design System (Brand Standards v3.0)

The discipline is In-N-Out's: few parts, held for a very long time. White does
the work; blue and red do the pointing. **Blue always outweighs red.**

| Token | Value | Role |
| --- | --- | --- |
| Porcelain | `#FBFAF7` | Bone ground |
| White | `#FFFFFF` | Dominant surface — ~75% of everything |
| Neon Blue | `#1BA3FF` | Primary accent — tube, glow, highlights |
| Enamel Blue | `#0B4DA2` | Ring, small type, the one primary action |
| Club Red | `#E0322A` | Secondary accent — rules, trim, crown line |
| Enamel Red | `#B4201A` | Small red type on white |
| Chrome / Steel / Asphalt | `#B9C0C7` / `#6C7681` / `#1B2129` | Neutrals & text |

**Signature elements**

- **The double rule** — blue over red, always in that order. Section breaks only
  (`components/DoubleRule.tsx`, `.dbl` utility).
- **The roundel** — white field, blue ring, red rule, script "The"
  (`components/Roundel.tsx`; `primary` / `compact` / `night` variants).
- **Script discipline** — Yellowtail sets the word "The" and nothing else, ever.
- **Neon breathes only** — 6s ease, 100% → 76%, in phase. No chase, no strobe.

## Sections

1. **Hero** — Jost-caps display headline, waitlist form (Email / ZIP / Vehicle),
   compact roundel, and a founding-member progress tracker.
2. **The Numbers (§06)** — the canonical value equation, `$99 − $127 = +$28`,
   itemized beneath, with one auditable control (fill-ups per month). Blue for
   what you pay, red for what you gain.
3. **How It Works (§08)** — three step cards + a porcelain **site blueprint**:
   8 angled 45° stalls, dual windows, blue perimeter primary, red crown
   subordinate.
4. **Vote Your City** — city / ZIP registration with a live leaderboard.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```
app/
  layout.tsx        # fonts, metadata
  page.tsx          # composes sections, separated by the double rule
  globals.css       # brand tokens + .dbl, .btn-primary, .card, .field, type
components/
  Navbar.tsx        Hero.tsx          RoiCalculator.tsx   (the value equation)
  HowItWorks.tsx    StationVisual.tsx CityVote.tsx
  WaitlistForm.tsx  ProgressTracker.tsx  Reveal.tsx
  Roundel.tsx       Wordmark.tsx      DoubleRule.tsx      Footer.tsx
lib/
  constants.ts      # brand + content data (single source of truth)
```

## Notes

Form submissions are mocked client-side. Wire `WaitlistForm` and `CityVote` to
a real API route (e.g. `app/api/waitlist/route.ts`) to persist leads. All
figures shown are formatting examples, not verified claims.
