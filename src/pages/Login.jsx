import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, CheckCircle2, Info, LogIn } from 'lucide-react'
import AuthLayout from '../components/AuthLayout.jsx'
import Button from '../components/Button.jsx'
import FormInput from '../components/FormInput.jsx'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Login() {
  const [values, setValues] = useState({ email: '', password: '', remember: true })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [showForgot, setShowForgot] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!values.email.trim()) {
      next.email = 'Email address is required.'
    } else if (!emailPattern.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.password) {
      next.password = 'Password is required.'
    } else if (values.password.length < 6) {
      next.password = 'Password must be at least 6 characters.'
    }
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus('idle')
      return
    }

    // Frontend-only demonstration: no authentication or storage occurs.
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 900)
  }

  const signOut = () => {
    setStatus('idle')
    setValues({ email: '', password: '', remember: true })
  }

  return (
    <AuthLayout
      aside={{
        title: 'Welcome back to your care portal.',
        text: 'Sign in to view your appointments, messages and care plans in one calm, organised place.',
      }}
    >
      {status === 'success' ? (
        <div className="animate-fade-in" role="status">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-teal-600">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="mt-4 text-2xl font-extrabold">Welcome, {values.email.split('@')[0] || 'patient'}!</h1>
          <p className="mt-2 text-sm leading-relaxed text-navy-300">
            You&apos;re viewing a <strong>demo patient welcome screen</strong>. This frontend
            demonstration does not authenticate against a real hospital database and gives no access to
            real patient records.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { label: 'Appointments', value: '2 upcoming' },
              { label: 'Messages', value: '1 new' },
              { label: 'Results', value: 'All clear' },
            ].map((card) => (
              <div key={card.label} className="rounded-xl bg-offwhite p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-300">{card.label}</p>
                <p className="mt-1 text-sm font-bold text-navy">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/services" variant="primary">
              Explore services
            </Button>
            <Button variant="outline" onClick={signOut}>
              Sign out
            </Button>
          </div>
        </div>
      ) : (
        <>
          <span className="eyebrow">Patient Login</span>
          <h1 className="mt-4 text-3xl font-extrabold">Welcome Back.</h1>
          <p className="mt-2 text-sm text-navy-300">
            Sign in to continue to your patient portal.
          </p>

          {/* Demo notice */}
          <div className="mt-5 flex gap-3 rounded-xl border border-teal-100 bg-mint/50 p-3.5 text-xs leading-relaxed text-teal-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p>
              <strong>Frontend demonstration.</strong> There is no backend and no real authentication.
              Any valid-looking email and a password of 6+ characters will show the demo welcome screen.
              Nothing is stored.
            </p>
          </div>

          {status === 'error' && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Something went wrong. Please try again.
            </div>
          )}

          <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <FormInput
              label="Email address"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              required
              autoComplete="email"
              placeholder="you@example.com"
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              required
              autoComplete="current-password"
              placeholder="Enter your password"
            />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <label className="inline-flex items-center gap-2 text-sm text-navy-400">
                <input
                  type="checkbox"
                  name="remember"
                  checked={values.remember}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-navy-200 text-teal-600 focus:ring-teal-500"
                />
                Remember me
              </label>
              <button
                type="button"
                onClick={() => setShowForgot((v) => !v)}
                className="text-sm font-semibold text-teal-700 hover:text-teal-600"
                aria-expanded={showForgot}
              >
                Forgot Password?
              </button>
            </div>

            {showForgot && (
              <div className="rounded-xl bg-offwhite p-3.5 text-xs leading-relaxed text-navy-400" role="status">
                Password recovery is not available in this frontend demo. In a live hospital portal you
                would receive a secure reset link by email.
              </div>
            )}

            <Button type="submit" size="lg" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                  Signing in…
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4" aria-hidden="true" />
                  Login
                </>
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-navy-300">
            New to Iqara Hospital?{' '}
            <Link to="/register" className="font-semibold text-teal-700 hover:text-teal-600">
              Create your patient account
            </Link>
          </p>
        </>
      )}
    </AuthLayout>
  )
}
