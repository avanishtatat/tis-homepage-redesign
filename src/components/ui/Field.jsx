export const inputClass =
  'mt-2 min-h-12 w-full rounded-xl border border-ink-muted/70 bg-surface px-4 text-base text-ink aria-[invalid=true]:border-brand-text aria-[invalid=true]:border-2'

export default function Field({ name, label, error, children }) {
  return (
    <div>
      <label
        htmlFor={`field-${name}`}
        className="block font-display text-sm font-bold uppercase tracking-wide"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`field-${name}-error`} role="alert" className="mt-1 text-sm font-medium text-brand-text">
          {error}
        </p>
      )}
    </div>
  )
}