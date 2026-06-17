import { useState } from 'react'
import { certificates } from '../../data/certificates'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './Certificates.module.css'

const VISIBLE = 3

export default function Certificates() {
  const ref = useScrollAnimation()
  const [index, setIndex] = useState(0)

  const total = certificates.length
  const canPrev = index > 0
  const canNext = index + VISIBLE < total

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(total - VISIBLE, i + 1))

  const visible = certificates.slice(index, index + VISIBLE)

  return (
    <section id="certificates" className={styles.section}>
      <div className={`${styles.container} fade-in`} ref={ref}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Certificados</h2>
          <div className={styles.controls}>
            <button
              className={`${styles.arrowBtn} ${!canPrev ? styles.disabled : ''}`}
              onClick={prev}
              disabled={!canPrev}
              aria-label="Anterior"
            >
              <i className="bi bi-arrow-left" />
            </button>
            <button
              className={`${styles.arrowBtn} ${!canNext ? styles.disabled : ''}`}
              onClick={next}
              disabled={!canNext}
              aria-label="Próximo"
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.carousel}>
          {visible.map((cert) => (
            <div key={cert.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className={styles.image} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <i className="bi bi-patch-check" />
                  </div>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{cert.title}</h3>
                <p className={styles.cardDesc}>{cert.description}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewBtn}
                >
                  Ver Certificado
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {Array.from({ length: total - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir para ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
