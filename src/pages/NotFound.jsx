import { Link } from 'react-router-dom'
import { Compass, Home, LifeBuoy, Search } from 'lucide-react'
import Button from '../components/Button.jsx'
import Logo from '../components/Logo.jsx'

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-20 text-center sm:py-28">
      <Logo />
      <p className="mt-10 text-6xl font-extrabold tracking-tight text-teal-500 sm:text-8xl">404</p>
      <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">We couldn&apos;t find that page</h1>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-navy-300 sm:text-base">
        The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back to
        the right place.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button to="/" size="lg">
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Button>
        <Button to="/services" variant="outline" size="lg">
          <Search className="h-4 w-4" aria-hidden="true" />
          Find a Service
        </Button>
        <Button to="/login" variant="ghost" size="lg">
          <Compass className="h-4 w-4" aria-hidden="true" />
          Patient Login
        </Button>
      </div>

      <p className="mt-8 inline-flex items-center gap-2 text-xs text-navy-300">
        <LifeBuoy className="h-3.5 w-3.5" aria-hidden="true" />
        Need help? Call{' '}
        <a className="font-semibold text-teal-700" href="tel:+15550124400">
          +1 (555) 012-4400
        </a>
      </p>

      <p className="mt-10 text-xs text-navy-200">
        Looking for something else? Visit our{' '}
        <Link to="/" className="font-semibold text-teal-700">
          homepage
        </Link>
        .
      </p>
    </div>
  )
}
