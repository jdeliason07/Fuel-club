// Shared brand + content constants — The Fuel Club, Brand Standards v3.0.
// Voice: short sentences, verifiable claims. Members, not customers.
// Figures shown are formatting examples, not verified claims.

export const BRAND = {
  name: "The Fuel Club",
  headline: "Never touch a gas pump again.",
} as const;

export const WAITLIST = {
  claimed: 412,
  total: 600,
  locationLabel: "Site 01",
} as const;

// Value equation — canonical form (guide §06).
// Membership − Value delivered = Your net. Blue for what you pay,
// red for what you gain. Two decimals for fuel, none for membership.
export const VALUE = {
  membership: 99,
  delivered: 127,
  net: 28,
} as const;

export type ValueLine = {
  label: string;
  detail: string;
  amount: number;
};

// Itemized beneath the equation. Every figure sourced and dated in production.
export const VALUE_LINES: ValueLine[] = [
  {
    label: "C-store credit",
    detail: "Coffee, snacks, energy drinks — spent every month anyway",
    amount: 99,
  },
  {
    label: "Unlimited touchless wash",
    detail: "Retail value, included with membership",
    amount: 18,
  },
  {
    label: "Full-service fuel delivery",
    detail: "Attendant handles the cap and nozzle; member fuel rate",
    amount: 10,
  },
];

export type Step = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: "blue" | "red";
};

export const STEPS: Step[] = [
  {
    id: "01",
    eyebrow: "Drive In",
    title: "Pull into a stall",
    description:
      "One of eight angled bays runs straight off the central hub. Thin hall walls hold the weather out. You stay in the car.",
    accent: "blue",
  },
  {
    id: "02",
    eyebrow: "Front Window",
    title: "Your order, handed over",
    description:
      "The food-and-drink port meets your driver window. Iced coffee, energy drinks, snacks — ordered in the app, waiting when you arrive.",
    accent: "red",
  },
  {
    id: "03",
    eyebrow: "Rear Window",
    title: "The tank is filled",
    description:
      "A trained attendant works the rear fueling port. Cap off, nozzle in, cap on. You pull out fueled, fed, and washed.",
    accent: "blue",
  },
];

export const CITIES = [
  "Austin, TX",
  "Miami, FL",
  "Scottsdale, AZ",
  "Nashville, TN",
  "Denver, CO",
];
