import { useState } from 'react'
import type { ContactFormData, ContactFormErrors } from '../../types/contact'
import { serviceOptions } from '../../data/contact'

const initialForm: ContactFormData = {
  name: '',
  email: '',
  request: '',
  service: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const update = (field: keyof ContactFormData, value: string) => {
    setForm({ ...form, [field]: value })
    setErrors({ ...errors, [field]: undefined })
    setSubmitted(false)
  }
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next: ContactFormErrors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = 'Please enter a valid email.'
    if (!form.service) next.service = 'Choose a service.'
    if (!form.request.trim())
      next.request = 'Tell us a little about your request.'
    setErrors(next)
    if (!Object.keys(next).length) setSubmitted(true)
  }
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>
          Name
          <input
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            placeholder="Your full name"
          />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            placeholder="you@company.com"
          />
          {errors.email && <small>{errors.email}</small>}
        </label>
      </div>
      <label>
        Service
        <select
          value={form.service}
          onChange={(event) => update('service', event.target.value)}
        >
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {errors.service && <small>{errors.service}</small>}
      </label>
      <label>
        How can we help?
        <textarea
          rows={5}
          value={form.request}
          onChange={(event) => update('request', event.target.value)}
          placeholder="Share your sourcing or logistics brief..."
        />
        {errors.request && <small>{errors.request}</small>}
      </label>
      <button className="button button-gold" type="submit">
        Send inquiry
      </button>
      {submitted && (
        <p className="form-success">
          Thanks. Your inquiry is ready for our trade desk.
        </p>
      )}
    </form>
  )
}

export default ContactForm
