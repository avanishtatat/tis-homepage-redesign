export default function SectionHeading({ id, eyebrow, title, accent, description, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <p className="font-display text-sm font-bold uppercase tracking-widest text-brand-text sm:text-base">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="mt-3 font-display text-4xl font-extrabold uppercase leading-tight sm:text-5xl"
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className="font-accent normal-case italic text-brand-text">{accent}</span>
          </>
        )}
      </h2>
      {description && <p className="mt-4 text-lg text-ink-muted">{description}</p>}
    </div>
  )
}