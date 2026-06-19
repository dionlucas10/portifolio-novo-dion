import { useState } from 'react'
import emailjs from '@emailjs/browser'

const initialState = { name: '', email: '', phone: '', interest: '', message: '' }

export function useContactForm() {
  const [fields, setFields] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          from_phone: fields.phone,
          interest: fields.interest,
          message: fields.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)
      setTimeout(() => {
        setFields(initialState)
        setSubmitted(false)
      }, 3000)
    } catch {
      setError('Falha ao enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return { fields, submitted, loading, error, handleChange, handleSubmit }
}
