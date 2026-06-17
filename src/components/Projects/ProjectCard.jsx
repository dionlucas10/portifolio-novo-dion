import styles from './Projects.module.css'

export default function ProjectCard({ project, reversed }) {
  return (
    <div className={`${styles.card} ${reversed ? styles.reversed : ''}`}>
      {/* Placeholder para screenshot do projeto */}
      <div className={styles.imageSide} style={{ background: project.color }}>
        {project.image ? (
          <img src={project.image} alt={project.title} className={styles.projectImg} />
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderText}>[ Prévia ]</span>
          </div>
        )}
      </div>

      <div className={styles.infoSide}>
        <span className={styles.tag}>
          <i className={`bi ${project.icon} ${styles.tagIcon}`} />
          {project.tag}
        </span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <a href={project.link} className={styles.linkBtn} aria-label={`Ver ${project.title}`}>
          <i className="bi bi-arrow-up-right" />
        </a>
      </div>
    </div>
  )
}
