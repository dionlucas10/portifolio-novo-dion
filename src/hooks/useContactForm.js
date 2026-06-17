import { useState } from 'react'

const initialState = { name: '', email: '', interest: '', message: '' }

export function useContactForm() {
  const [fields, setFields] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', fields)
    setSubmitted(true)
    setTimeout(() => {
      setFields(initialState)
      setSubmitted(false)
    }, 3000)
  }

  return { fields, submitted, handleChange, handleSubmit }
}
