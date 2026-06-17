import { useState } from 'react'

export function useTestimonial(total) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => setCurrentIndex((i) => (i - 1 + total) % total)
  const next = () => setCurrentIndex((i) => (i + 1) % total)

  return { currentIndex, prev, next }
}
