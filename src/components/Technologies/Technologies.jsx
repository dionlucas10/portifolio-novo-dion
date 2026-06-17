import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { technologies } from '../../data/technologies'
import styles from './Technologies.module.css'

export default function Technologies() {
  const ref = useScrollAnimation()

  return (
    <section id="technologies" className={styles.section}>
      <div className={`${styles.container} fade-in`} ref={ref}>
        <h2 className={styles.sectionTitle}>Tecnologias</h2>
        <div className={styles.divider} />

        <div className={styles.grid}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.techItem}>
              <span className={styles.iconWrapper}>
                <img src={tech.logo} alt={tech.name} className={styles.icon} />
              </span>
              <span className={styles.name}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
