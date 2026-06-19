import { useEffect, useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import styles from './Experience.module.css'

const trail = [
  {
    icon: 'bi-lightbulb',
    title: 'Início da Jornada',
    role: 'Autodidata · Estudante',
    period: 'Jan 2024 → Jun 2024',
    desc: 'Primeiros passos com HTML, CSS e JavaScript. Descobri minha paixão por desenvolvimento web e criação de interfaces modernas.',
    image: './assets/expeciencia/comeco.jpg',
    side: 'left',
  },
  {
    icon: 'bi-trophy',
    title: 'Hackathon Mastery Med',
    role: 'Mastery Med · Desenvolvedor',
    period: 'Out 2024 → Out 2024',
    desc: 'Competição de tecnologia e saúde. Desenvolvemos uma solução web funcional em equipe em menos de 48 horas.',
    image: './assets/expeciencia/mastery.jpg',
    side: 'right',
  },
  {
    icon: 'bi-briefcase',
    title: 'Freelancer Front-End',
    role: 'Ailtur Turismo · Dev Front-End',
    period: 'Mar 2025 → Ago 2025',
    desc: 'Desenvolvimento de landing pages e sites institucionais. Aprimoramento das habilidades em HTML, CSS, JavaScript e frameworks modernos.',
    image: './assets/expeciencia/ailtu.png',
    side: 'left',
  },
  {
    icon: 'bi-book',
    title: 'Entrei para a plataforma Alura',
    role: 'Alura · Aluno',
    period: 'Novembro 2025 → até hoje',
    desc: 'Cursos de desenvolvimento web, front-end e back-end. Aprendizado contínuo, prática de projetos e aprimoramento das habilidades técnicas.',
    image: './assets/expeciencia/alura.png',
    side: 'right',
  },
  {
    icon: 'bi-book',
    title: 'Meu primeiro estágio',
    role: 'GVA · Estagiário',
    period: 'Junho 2026 → até hoje',
    desc: 'Estágio Home Office em desenvolvimento web. Aprendizado prático, colaboração em equipe e aplicação de conhecimentos adquiridos na Alura e toda minha formação.',
    image: './assets/expeciencia/estagio.png',
    side: 'left',
  },
]

export default function Experience() {
  const headerRef = useScrollAnimation()
  const timelineRef = useRef(null)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const items = timeline.querySelectorAll('[data-trail]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <span className={styles.pill}>EXPERIÊNCIA</span>
          <h2 className={styles.title}>Minha Trilha</h2>
          <p className={styles.subtitle}>
            Cada parada marca um passo importante na minha jornada como desenvolvedor.
          </p>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.line} />

          {trail.map((item, i) => (
            <div
              key={i}
              data-trail
              className={`${styles.entry} ${styles[item.side]} ${item.side === 'left' ? 'slide-left' : 'slide-right'}`}
            >
              <div className={styles.card}>
                <div className={styles.imageArea}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div
                    className={styles.imagePlaceholder}
                    style={{ display: item.image ? 'none' : 'flex' }}
                  >
                    <i className={`bi ${item.icon} ${styles.placeholderIcon}`} />
                    <span className={styles.placeholderText}>[ Adicione sua imagem ]</span>
                  </div>
                  <div className={styles.imageGradient} />
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardRow}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <span className={styles.period}>
                      <i className="bi bi-calendar3" />
                      {item.period}
                    </span>
                  </div>
                  <span className={styles.roleTag}>
                    <i className={`bi ${item.icon}`} />
                    {item.role}
                  </span>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </div>

              <div className={styles.dot}>
                <i className={`bi ${item.icon}`} />
              </div>
            </div>
          ))}

          <div className={`${styles.finalMarker} fade-in`} data-trail>
            <div className={styles.finalDot}>
              <i className="bi bi-rocket" />
            </div>
            <span className={styles.finalLabel}>Hoje — Em evolução contínua</span>
          </div>
        </div>
      </div>
    </section>
  )
}
