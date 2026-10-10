import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary:
    'bg-teal-500 text-white shadow-soft hover:bg-teal-600 hover:shadow-card active:scale-[0.98]',
  secondary:
    'bg-navy-500 text-white shadow-soft hover:bg-navy-600 hover:shadow-card active:scale-[0.98]',
  outline:
    'border border-teal-500/70 bg-white text-teal-700 hover:border-teal-500 hover:bg-teal-50 active:scale-[0.98]',
  ghost: 'text-navy-500 hover:bg-navy-50 hover:text-navy-600',
  mint: 'bg-mint text-teal-700 hover:bg-teal-100 active:scale-[0.98]',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
