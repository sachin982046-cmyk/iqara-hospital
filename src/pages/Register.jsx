import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, CheckCircle2, Info, UserPlus } from 'lucide-react'
import AuthLayout from '../components/AuthLayout.jsx'
import Button from '../components/Button.jsx'
import FormInput from '../components/FormInput.jsx'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+\d][\d\s()-]{6,}$/

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  dob: '',
  password: '',
  confirmPassword: '',
  consent: false,
}

export default function Register() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!values.fullName.trim()) {
      next.fullName = 'Please enter your full name.'
    } else if (values.fullName.trim().length < 2) {
      next.fullName = 'Name looks too short.'
    }
    if (!values.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!emailPattern.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.phone.trim()) {
      next.phone = 'Please enter your phone number.'
    } else if (!phonePattern.test(values.phone.trim())) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (!values.dob) {
      next.dob = 'Please enter your date of birth.'
    } else if (new Date(values.dob) > new Date()) {
      next.dob = 'Date of birth cannot be in the future.'
    }
    if (!values.password) {
      next.password = 'Please create a password.'
    } else if (values.password.length < 8) {
      next.password = 'Use at least 8 characters.'
    } else if (!/[A-Za-z]/.test(values.password) || !/\d/.test(values.password)) {
      next.password = 'Include at least one letter and one number.'
    }
    if (!values.confirmPassword) {
      next.confirmPassword = 'Please confirm your password.'
    } else if (values.confirmPassword !== values.password) {
      next.confirmPassword = 'Passwords do not match.'
    }
    if (!values.consent) {
      next.consent = 'Please accept the terms and privacy policy to continue.'
    }
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setStatus('idle')
      // Move focus to the first field with an error for keyboard users.
      const firstError = Object.keys(next)[0]
      const el = document.querySelector(`[name="${firstError}"]`)
      el?.focus()
      return
    }

    // Frontend-only demonstration: nothing is transmitted or stored.
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 900)
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
  }

  return (
    <AuthLayout
      aside={{
        title: 'Join the Iqara patient community.',
        text: 'Create a demonstration account to explore how a modern patient portal experience could look.',
        points: [
          'A calmer way to manage your care',
          'Clear, guided registration',
          'Built with accessibility in mind',
        ],
      }}
    >
      {status === 'success' ? (
        <div className="animate-fade-in" role="status">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-teal-600">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="mt-4 text-2xl font-extrabold">Account created (demo)</h1>
          <p className="mt-2 text-sm leading-relaxed text-navy-300">
            Thanks, <strong>{values.fullName.split(' ')[0]}</strong>. Your details passed frontend
            validation, but <strong>no account was actually created</strong> and no personal information
            was sent or stored — this is a demonstration with no backend connected.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="/login">Continue to demo login</Button>
            <Button variant="outline" onClick={resetForm}>
              Register another
            </Button>
          </div>
        </div>
      ) : (
        <>
          <span className="eyebrow">Patient Registration</span>
          <h1 className="mt-4 text-3xl font-extrabold">Create Your Patient Account.</h1>
          <p className="mt-2 text-sm text-navy-300">
            It only takes a moment. Fields marked with * are required.
          </p>

          <div className="mt-5 flex gap-3 rounded-xl border border-teal-100 bg-mint/50 p-3.5 text-xs leading-relaxed text-teal-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p>
              <strong>Demonstration only.</strong> This form validates in your browser but does not send
              or store any personal or medical information.
            </p>
          </div>

          {status === 'error' && (
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
              <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Something went wrong. Please try again.
            </div>
          )}

          <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
            <FormInput
              label="Full name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              error={errors.fullName}
              required
              autoComplete="name"
              placeholder="Jordan Ellis"
              className="sm:col-span-2"
            />
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
              label="Phone number"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              required
              autoComplete="tel"
              placeholder="+1 555 000 0000"
            />
            <FormInput
              label="Date of birth"
              name="dob"
              type="date"
              value={values.dob}
              onChange={handleChange}
              error={errors.dob}
              required
              max={new Date().toISOString().split('T')[0]}
            />
            <div className="hidden sm:block" aria-hidden="true" />
            <FormInput
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              required
              autoComplete="new-password"
              placeholder="Create a password"
              hint="At least 8 characters, with a letter and a number."
            />
            <FormInput
              label="Confirm password"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
              autoComplete="new-password"
              placeholder="Re-enter your password"
            />

            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-navy-400">
                <input
                  type="checkbox"
                  name="consent"
                  checked={values.consent}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.consent)}
                  className="mt-0.5 h-4 w-4 rounded border-navy-200 text-teal-600 focus:ring-teal-500"
                />
                <span>
                  I agree to the <span className="font-semibold text-teal-700">Terms of Service</span> and{' '}
                  <span className="font-semibold text-teal-700">Privacy Policy</span>, and understand this
                  is a demonstration that stores no data.
                </span>
              </label>
              {errors.consent && (
                <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {errors.consent}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                    Creating account…
                  </>
                ) : (
                  <>
                    <UserPlus className="h-4 w-4" aria-hidden="true" />
                    Create Account
                  </>
                )}
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-navy-300">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-teal-700 hover:text-teal-600">
              Login here
            </Link>
          </p>
        </>
      )}
    </AuthLayout>
  )
}
