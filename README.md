# FUEL CLUB — Pre-Launch Landing & Waitlist

A high-converting, responsive pre-launch landing page and waitlist web app for
**FUEL CLUB**, a luxury, members-only concierge gas station.

> **Never Touch a Gas Pump Again.** Pay $99/month. Get $99/month in C-store
> credits. Enjoy complete 2-window concierge fueling without leaving your car.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom neon + glassmorphism design system
- Zero external UI dependencies (hand-built components & animations)

## Design System

| Token | Value | Use |
| --- | --- | --- |
| `retro-white` | `#F8F9FA` | Pristine structure |
| `asphalt` | `#121212` | Dark contrast base |
| `neon-red` | `#FF0033` | Driver-side canopy accent |
| `neon-blue` | `#0066FF` | Fuel-side canopy accent |

1950s In-N-Out retro-chic architecture meets glowing modern synthwave — bold
clean sans-serif headers, high-contrast buttons, subtle neon glow on hover.

## Sections

1. **Hero** — headline, subheadline, interactive waitlist form (Email, ZIP,
   Vehicle Make/Model) and a live VIP progress tracker.
2. **The $99 No-Brainer ROI Calculator** — interactive breakdown netting out to
   $0 net cost, with a live car-wash value slider.
3. **How the Diagonal 2-Window Bay Works** — 3 interactive step cards plus an
   architectural blueprint of the 8-stall station.
4. **City / Zip Registration** — vote for your city with a live leaderboard.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Project Structure

```
app/
  layout.tsx        # root layout, fonts, metadata
  page.tsx          # composes all sections
  globals.css       # Tailwind + neon/glass utility classes
components/
  Navbar.tsx        Hero.tsx          RoiCalculator.tsx
  HowItWorks.tsx    StationVisual.tsx CityVote.tsx
  WaitlistForm.tsx  ProgressTracker.tsx  Reveal.tsx
  Logo.tsx          Footer.tsx
lib/
  constants.ts      # brand + content data (single source of truth)
```

## Notes

Form submissions are mocked client-side. Wire `WaitlistForm` and `CityVote`
to a real API route (e.g. `app/api/waitlist/route.ts`) or your CRM of choice
to persist leads.
