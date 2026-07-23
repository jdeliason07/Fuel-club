type LogoProps = {
  className?: string;
};

/**
 * FUEL CLUB wordmark emblem — clean retro-modern white type
 * with subtle red (driver-side) and blue (fuel-side) neon trim accents.
 */
export default function Logo({ className = "h-8 w-auto" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Emblem mark: split canopy chevron */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        className="h-full w-auto"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          rx="9"
          className="fill-white/[0.03] stroke-white/25"
          strokeWidth="1.5"
        />
        {/* red canopy */}
        <path
          d="M9 27 L20 11"
          stroke="#FF0033"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 4px #FF0033)" }}
        />
        {/* blue canopy */}
        <path
          d="M20 11 L31 27"
          stroke="#0066FF"
          strokeWidth="3"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 4px #0066FF)" }}
        />
        {/* base line */}
        <path
          d="M9 30 H31"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-lg font-extrabold uppercase leading-none tracking-[0.18em] text-white">
        Fuel
        <span className="ml-1 font-black text-white">Club</span>
      </span>
    </span>
  );
}
