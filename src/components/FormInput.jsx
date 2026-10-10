import { useId, useState } from 'react'
import { AlertCircle, Eye, EyeOff } from 'lucide-react'

/**
 * Accessible, reusable form field with label, inline validation
 * messaging and an optional password visibility toggle.
 */
export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  hint,
  required = false,
  autoComplete,
  placeholder,
  as = 'input',
  rows = 4,
  children,
  className = '',
  ...props
}) {
  const id = useId()
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const [show, setShow] = useState(false)

  const isPassword = type === 'password'
  const inputType = isPassword ? (show ? 'text' : 'password') : type

  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(' ') || undefined

  const fieldClasses = `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slateink placeholder:text-navy-200 transition-colors focus:outline-none ${
    error
      ? 'border-red-400 focus:border-red-500'
      : 'border-navy-100 focus:border-teal-500'
  }`

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
        {required && (
          <span className="ml-1 text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <div className="relative">
        {as === 'textarea' ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            rows={rows}
            placeholder={placeholder}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={fieldClasses}
            {...props}
          />
        ) : as === 'select' ? (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={fieldClasses}
            {...props}
          >
            {children}
          </select>
        ) : (
          <>
            <input
              id={id}
              name={name}
              type={inputType}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              required={required}
              autoComplete={autoComplete}
              aria-invalid={Boolean(error)}
              aria-describedby={describedBy}
              className={`${fieldClasses} ${isPassword ? 'pr-11' : ''}`}
              {...props}
            />
            {isPassword && (
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-navy-300 hover:text-teal-600"
                aria-label={show ? 'Hide password' : 'Show password'}
                aria-pressed={show}
              >
                {show ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
              </button>
            )}
          </>
        )}
      </div>

      {hint && !error && (
        <p id={hintId} className="text-xs text-navy-300">
          {hint}
        </p>
      )}

      {error && (
        <p id={errorId} role="alert" className="flex items-center gap-1.5 text-xs font-medium text-red-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}
