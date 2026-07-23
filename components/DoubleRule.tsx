/**
 * The double rule — the portable brand signature.
 * Blue over red, always in that order. Used for section breaks only;
 * never more than two per screen (guide §10).
 */
export default function DoubleRule({
  lit = false,
  breathe = false,
  className = "",
  style,
}: {
  lit?: boolean;
  breathe?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <hr
      aria-hidden="true"
      style={style}
      className={`dbl ${lit ? "dbl-lit" : ""} ${
        breathe ? "animate-breathe" : ""
      } ${className}`}
    />
  );
}
