import Roundel from "./Roundel";

/**
 * Horizontal lockup for tight spaces (nav bar, footer):
 * compact roundel + Jost wordmark with the script "The" accent.
 * Pass `showRoundel={false}` for a type-only lockup.
 */
export default function Wordmark({
  onDark = false,
  showRoundel = true,
  className = "",
}: {
  onDark?: boolean;
  showRoundel?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {showRoundel && (
        <Roundel size={40} variant={onDark ? "night" : "compact"} />
      )}
      <span className="flex flex-col leading-none">
        <span
          className="script -mb-0.5"
          style={{ fontSize: 14, color: "var(--club-red)" }}
        >
          The
        </span>
        <span
          className="font-display text-base font-extrabold uppercase tracking-[0.14em]"
          style={{ color: onDark ? "#fff" : "var(--enamel-blue)" }}
        >
          Fuel Club
        </span>
      </span>
    </span>
  );
}
