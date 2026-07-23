// Shared brand + content constants for FUEL CLUB

export const BRAND = {
  name: "FUEL CLUB",
  tagline: "Never Touch a Gas Pump Again.",
} as const;

export const WAITLIST = {
  claimed: 412,
  total: 600,
  locationLabel: "Location #1",
} as const;

export const PRICING = {
  membership: 99,
  storeCredit: 99,
} as const;

export type Step = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  accent: "red" | "blue";
};

export const STEPS: Step[] = [
  {
    id: 1,
    eyebrow: "Step 01",
    title: "Drive-In",
    description:
      "Pull into one of 8 angled 45° enclosed stalls connected directly to the central micro-fulfillment hub. Thin hall-style walls shield you from weather — no stepping out, ever.",
    accent: "blue",
  },
  {
    id: 2,
    eyebrow: "Step 02",
    title: "Front Window",
    description:
      "Your app pre-orders — iced coffee, energy drinks, snacks — are handed straight through the dedicated food & drink port to your driver window.",
    accent: "red",
  },
  {
    id: 3,
    eyebrow: "Step 03",
    title: "Back Window",
    description:
      "A trained attendant handles your fuel cap and nozzle at the dedicated rear fueling port while you relax. Pull out fueled, fed, and washed.",
    accent: "blue",
  },
];

export type RoiRow = {
  label: string;
  detail: string;
  amount: number; // signed dollars
  kind: "charge" | "credit" | "bonus" | "total";
};

export const ROI_ROWS: RoiRow[] = [
  {
    label: "Membership Fee",
    detail: "Full concierge access, billed monthly",
    amount: 99,
    kind: "charge",
  },
  {
    label: "C-Store Credit",
    detail: "Coffee, snacks & energy drinks — every month",
    amount: -99,
    kind: "credit",
  },
  {
    label: "Unlimited Touchless Car Wash",
    detail: "Included free with every membership",
    amount: 0,
    kind: "bonus",
  },
];

export const CITIES = [
  "Austin, TX",
  "Miami, FL",
  "Scottsdale, AZ",
  "Nashville, TN",
  "Denver, CO",
];
