export default function SectionHead({
  eyebrow,
  title,
  text,
  className = "",
  light = false,
}) {
  return (
    <div className={`mb-10 max-w-2xl ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-3 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-gold" : "text-accent-deep"}`}
        >
          <span
            className={`h-px w-8 ${light ? "bg-gold" : "bg-accent"}`}
            aria-hidden='true'
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl leading-[1.08] sm:text-5xl ${light ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-3 font-body ${light ? "text-paper/70" : "text-muted"}`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
