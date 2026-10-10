import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Button from './Button.jsx'
import FormInput from './FormInput.jsx'
import { departments } from '../data/hospitalData.js'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  department: '',
  preferredDate: '',
  message: '',
}

/**
 * Appointment enquiry form. Frontend-only: it validates input and shows
 * a confirmation, but does not transmit data anywhere.
 */
export default function AppointmentEnquiry({ id = 'appointment', compact = false }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your full name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (values.phone && !/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) {
      next.phone = 'Please enter a valid phone number.'
    }
    if (!values.message.trim()) next.message = 'Please tell us briefly how we can help.'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    setSubmitting(true)
    // Simulated async feedback only — no data leaves the browser.
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id={id} className={compact ? 'card p-6 sm:p-8' : 'card p-6 shadow-card sm:p-10'}>
      <div className="max-w-2xl">
        <span className="eyebrow">Appointment enquiry</span>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Enquire about an appointment</h2>
        <p className="mt-2 text-sm leading-relaxed text-navy-300 sm:text-base">
          Share a few details and our team will follow up to arrange a suitable time. This form is a
          frontend demonstration and does not send information to a server.
        </p>
      </div>

      {submitted ? (
        <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-teal-200 bg-mint/60 p-6">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-teal-600 shadow-soft">
            <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="text-lg font-bold text-navy">Thank you, {values.name.split(' ')[0] || 'there'}!</h3>
          <p className="text-sm text-navy-400">
            Your enquiry has been validated locally. Because this is a frontend-only demo, nothing was
            sent — please call {''}
            <a className="font-semibold text-teal-700" href="tel:+15550124400">
              +1 (555) 012-4400
            </a>{' '}
            to confirm an appointment.
          </p>
          <Button variant="outline" size="sm" onClick={reset}>
            Submit another enquiry
          </Button>
        </div>
      ) : (
        <form className="mt-6 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
          <FormInput
            label="Full name"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
            required
            autoComplete="name"
            placeholder="Jordan Ellis"
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
            hint="Optional"
            autoComplete="tel"
            placeholder="+1 555 000 0000"
          />
          <FormInput
            label="Preferred date"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={handleChange}
            hint="Optional"
          />
          <FormInput
            label="Department"
            name="department"
            as="select"
            value={values.department}
            onChange={handleChange}
            className="sm:col-span-2"
          >
            <option value="">Select a department (optional)</option>
            {departments.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </FormInput>
          <FormInput
            label="How can we help?"
            name="message"
            as="textarea"
            value={values.message}
            onChange={handleChange}
            error={errors.message}
            required
            className="sm:col-span-2"
            placeholder="Briefly describe your concern or the service you are interested in."
          />

          <div className="flex flex-wrap items-center justify-end gap-3 sm:col-span-2">
              <p className="text-xs text-navy-300">No data is stored or transmitted.</p>
            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
                  Sending enquiry…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send enquiry
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </section>
  )
}
