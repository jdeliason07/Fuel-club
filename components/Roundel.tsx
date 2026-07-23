/**
 * The roundel — one badge, cast not drawn.
 * White field, blue ring, red rule. Script "The" above the wordmark.
 * Construction follows Brand Standards §02: ring 4% of diameter,
 * wordmark cap height ~18%, red rule ~38%, script optional at large sizes.
 *
 * Variants:
 *  - primary : full roundel with script (default)
 *  - compact : ring + wordmark + red rule, no script (< 96px)
 *  - night   : dark field, neon-blue ring, white wordmark
 */
type RoundelProps = {
  size?: number;
  variant?: "primary" | "compact" | "night";
  className?: string;
};

export default function Roundel({
  size = 186,
  variant = "primary",
  className = "",
}: RoundelProps) {
  const night = variant === "night";
  const showScript = variant === "primary" && size >= 96;
  const ring = Math.round(size * 0.04);

  return (
    <span
      className={`inline-flex flex-none flex-col items-center justify-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: night ? "var(--asphalt)" : "var(--white)",
        border: `${ring}px solid ${
          night ? "var(--neon-blue)" : "var(--enamel-blue)"
        }`,
        boxShadow: night
          ? "0 0 30px rgba(27,163,255,0.5)"
          : "0 3px 16px rgba(27,33,41,0.13)",
      }}
      aria-label="The Fuel Club"
    >
      {showScript && (
        <span
          className="script"
          style={{ fontSize: size * 0.125, lineHeight: 0.8, marginBottom: 2 }}
        >
          The
        </span>
      )}
      <span
        className="text-center font-display font-extrabold uppercase leading-[0.88]"
        style={{
          fontSize: size * 0.185,
          letterSpacing: "0.02em",
          color: night ? "var(--white)" : "var(--enamel-blue)",
        }}
      >
        Fuel
        <br />
        Club
      </span>
      <span
        style={{
          width: size * 0.38,
          height: Math.max(2, size * 0.016),
          background: "var(--club-red)",
          marginTop: size * 0.03,
        }}
      />
    </span>
  );
}
