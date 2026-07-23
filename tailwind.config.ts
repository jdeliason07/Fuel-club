import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Fuel Club — Brand Standards v3.0 palette
        porcelain: "#FBFAF7", // bone ground
        white: "#FFFFFF", // dominant surface — 75% of everything
        "neon-blue": "#1BA3FF", // primary accent — tube color, glow, highlights
        "enamel-blue": "#0B4DA2", // painted/printed blue — ring, small type, primary action
        "club-red": "#E0322A", // secondary accent — rules, trim, crown line
        "enamel-red": "#B4201A", // small red type on white
        chrome: "#B9C0C7", // trim, banding, dividers — neutral, not an accent
        steel: "#6C7681", // secondary text, captions
        asphalt: "#1B2129", // body text, night backgrounds
        stroke: "#E4E4DE", // hairlines, card borders
      },
      fontFamily: {
        // Display + signage: geometric caps
        display: ["Jost", "Futura PT", "Century Gothic", "sans-serif"],
        // Body + UI
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        // Data, receipts, prices
        mono: ["Space Mono", "ui-monospace", "Menlo", "monospace"],
        // Script accent — one word only
        script: ["Yellowtail", "cursive"],
      },
      fontWeight: {
        body: "380",
      },
      borderRadius: {
        // Bullnose everywhere — mid-century is round-cornered
        card: "14px",
      },
      boxShadow: {
        card: "0 3px 16px rgba(27,33,41,0.08)",
        roundel: "0 3px 16px rgba(27,33,41,0.13)",
        "neon-night": "0 0 30px rgba(27,163,255,0.5)",
        "rule-lit": "0 0 18px rgba(27,163,255,0.45)",
      },
      spacing: {
        // Strict 4 / 8 / 12 / 20 / 32 / 52 scale (guide §10)
        "1.5x": "12px",
        "5x": "20px",
        "8x": "32px",
        "13x": "52px",
      },
      transitionTimingFunction: {
        // Digital motion — 180ms ease-out
        digital: "cubic-bezier(0, 0, 0.2, 1)",
      },
      keyframes: {
        // Neon breathes only — 6s ease, 100% -> 76%, both colors in phase.
        // No chase, no strobe, no sequencing.
        breathe: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.76" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        "fade-up": "fade-up 0.6s cubic-bezier(0,0,0.2,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
