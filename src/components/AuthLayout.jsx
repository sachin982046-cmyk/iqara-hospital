import { Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import Logo from './Logo.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'

const SIDE_IMAGE =
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80'

export default function AuthLayout({ children, aside }) {
  return (
    <div className="container-page grid items-stretch gap-8 py-10 lg:grid-cols-2 lg:py-16">
      {/* Form column */}
      <div className="mx-auto w-full max-w-lg">
        <div className="mb-6 flex items-center justify-between">
          <Logo />
          <Link to="/" className="text-sm font-semibold text-teal-700 hover:text-teal-600">
            ← Back to Home
          </Link>
        </div>
        <div className="card p-6 shadow-card sm:p-8">{children}</div>
      </div>

      {/* Brand panel */}
      <aside className="relative hidden overflow-hidden rounded-[2rem] lg:block">
        <ImageWithFallback
          src={SIDE_IMAGE}
          alt="Iqara Hospital care team environment"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-600/95 via-navy-500/70 to-teal-700/40" />
        <div className="relative flex h-full flex-col justify-end p-10 text-white">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Secure &amp; private by design
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight">{aside?.title ?? 'Your care, in one place.'}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
            {aside?.text ??
              'Access your appointments, results and care plans through the Iqara patient portal.'}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/85">
            {(aside?.points ?? [
              'Manage appointments in one place',
              'Keep your care team in sync',
              'Get reminders for follow-ups',
            ]).map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl bg-navy-900/40 p-3 text-xs leading-relaxed text-white/70 backdrop-blur">
            Demonstration only — this portal does not connect to a real hospital system and provides no
            access to actual patient records.
          </p>
        </div>
      </aside>
    </div>
  )
}
