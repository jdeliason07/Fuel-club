import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand structural palette
        "retro-white": "#F8F9FA",
        "pure-white": "#FFFFFF",
        asphalt: "#121212",
        "asphalt-800": "#1A1A1A",
        "asphalt-700": "#242424",
        // Neon accents
        "neon-red": "#FF0033",
        "neon-blue": "#0066FF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "neon-red": "0 0 5px #FF0033, 0 0 20px rgba(255,0,51,0.55)",
        "neon-red-lg":
          "0 0 8px #FF0033, 0 0 30px rgba(255,0,51,0.6), 0 0 60px rgba(255,0,51,0.35)",
        "neon-blue": "0 0 5px #0066FF, 0 0 20px rgba(0,102,255,0.55)",
        "neon-blue-lg":
          "0 0 8px #0066FF, 0 0 30px rgba(0,102,255,0.6), 0 0 60px rgba(0,102,255,0.35)",
        glass: "0 8px 32px rgba(0,0,0,0.37)",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      keyframes: {
        "neon-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.72" },
        },
        "neon-flicker": {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.4" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "progress-fill": {
          "0%": { width: "0%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "neon-pulse": "neon-pulse 2.6s ease-in-out infinite",
        "neon-flicker": "neon-flicker 4s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
