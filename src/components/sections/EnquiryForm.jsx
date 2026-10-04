import { useEffect, useRef, useState } from 'react'
import { classOptions, stateOptions } from '../../data/enquiry'
import { validateEnquiry } from '../../utils/validateEnquiry'
import Button from '../ui/Button'
import Field, { inputClass } from '../ui/Field'

export default function EnquiryForm() {
  const [errors, setErrors] = useState({})
  const [submittedName, setSubmittedName] = useState(null)
  const successRef = useRef(null)

  useEffect(() => {
    if (submittedName) successRef.current?.focus()
  }, [submittedName])

  const fieldProps = (name) => ({
    id: `field-${name}`,
    name,
    className: inputClass,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `field-${name}-error` : undefined,
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const values = {
      name: data.get('name'),
      phone: data.get('phone'),
      grade: data.get('grade'),
      state: data.get('state'),
      consent: data.get('consent') === 'on',
    }

    const found = validateEnquiry(values)
    setErrors(found)

    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      form.elements.namedItem(firstInvalid)?.focus()
      return
    }

    // A real integration would POST `values` to the admissions API here.
    setSubmittedName(values.name.trim())
  }

  const clearError = (event) => {
    const { name } = event.target
    if (!errors[name]) return
    setErrors((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  if (submittedName) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-3xl border border-line bg-surface p-8 text-center outline-none sm:p-10"
      >
        <p className="font-display text-3xl font-extrabold uppercase">Thank you, {submittedName}!</p>
        <p className="mt-3 text-ink-muted">Our admissions team will contact you shortly.</p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmittedName(null)}>
          Submit another enquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={clearError}
      noValidate
      className="space-y-5 rounded-3xl border border-line bg-surface p-6 sm:p-8"
    >
      <Field name="name" label="Name" error={errors.name}>
        <input {...fieldProps('name')} type="text" autoComplete="name" />
      </Field>

      <Field name="phone" label="Mobile number" error={errors.phone}>
        <div className="flex gap-2">
          <span className="mt-2 inline-flex min-h-12 items-center rounded-xl border border-ink-muted/70 px-4 font-bold">
            +91
          </span>
          <input {...fieldProps('phone')} type="tel" inputMode="numeric" autoComplete="tel-national" />
        </div>
      </Field>

      <Field name="grade" label="Class" error={errors.grade}>
        <select {...fieldProps('grade')} defaultValue="">
          <option value="" disabled>Select class</option>
          {classOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </Field>

      <Field name="state" label="State" error={errors.state}>
        <select {...fieldProps('state')} defaultValue="" autoComplete="address-level1">
          <option value="" disabled>Select state</option>
          {stateOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </Field>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input
            type="checkbox"
            name="consent"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'field-consent-error' : undefined}
            className="mt-0.5 size-5 shrink-0 accent-brand"
          />
          <span>I agree to be contacted by Tulas International School about my enquiry.</span>
        </label>
        {errors.consent && (
          <p id="field-consent-error" role="alert" className="mt-1 text-sm font-medium text-brand-text">
            {errors.consent}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full">
        Enquire Now
      </Button>
    </form>
  )
}