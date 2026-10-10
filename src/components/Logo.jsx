import { Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Iqara Hospital wordmark: a simple medical pulse icon inside a rounded
 * teal tile, followed by the brand name. Original branding, not derived
 * from any real hospital.
 */
export default function Logo({ variant = 'dark', withText = true, className = '' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-navy'
  const subColor = variant === 'light' ? 'text-mint' : 'text-teal-600'

  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2.5 rounded-lg ${className}`}
      aria-label="Iqara Hospital — go to homepage"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-soft transition-transform duration-300 group-hover:scale-105">
        <Activity className="h-5 w-5 text-white" strokeWidth={2.5} aria-hidden="true" />
      </span>
      {withText && (
        <span className="leading-tight">
          <span className={`block text-lg font-extrabold tracking-tight ${textColor}`}>Iqara</span>
          <span className={`block text-[11px] font-semibold uppercase tracking-[0.18em] ${subColor}`}>
            Hospital
          </span>
        </span>
      )}
    </Link>
  )
}
