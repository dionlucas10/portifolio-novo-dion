import { useTestimonial } from '../../hooks/useTestimonial'
import { testimonials } from '../../data/testimonials'
import styles from './Testimonials.module.css'

export default function Testimonials() {
  const { currentIndex, prev, next } = useTestimonial(testimonials.length)
  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Depoimentos</h2>

        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((s) => (
            <i key={s} className={`bi bi-star-fill ${styles.star}`} />
          ))}
        </div>

        <blockquote className={styles.quote}>{current.quote}</blockquote>

        <div className={styles.author}>
          <div className={styles.avatar}>{current.initials}</div>
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{current.name}</span>
            <span className={styles.authorRole}>{current.role}</span>
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.arrowBtn} onClick={prev} aria-label="Anterior">
            <i className="bi bi-arrow-left" />
          </button>
          <button className={styles.arrowBtn} onClick={next} aria-label="Próximo">
            <i className="bi bi-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  )
}
