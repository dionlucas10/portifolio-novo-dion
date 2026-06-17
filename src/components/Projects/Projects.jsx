import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section id="projects" className={styles.projects}>
      <div className={`${styles.container} fade-in`} ref={ref}>
        <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
        <div className={styles.divider} />

        <div className={styles.list}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
