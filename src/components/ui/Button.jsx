const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-display font-bold uppercase tracking-wide transition-colors duration-200'

const variants = {
  primary: 'bg-brand text-on-brand hover:bg-brand/85',
  outline: 'border-2 border-current text-ink hover:bg-ink hover:text-surface',
  light: 'bg-white text-brand hover:bg-white/90',
  outlineLight: 'border-2 border-white text-white hover:bg-white hover:text-brand',
}

const sizes = {
  md: 'px-5 text-sm',
  lg: 'px-7 text-base',
}

export default function Button({
  href,
  external = false,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {}
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}