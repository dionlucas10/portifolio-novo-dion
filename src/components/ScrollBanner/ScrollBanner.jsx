import styles from './ScrollBanner.module.css'

const words = ['ESBOÇO', 'DESIGN', 'DESENVOLVIMENTO', 'FRONT-END', 'UI/UX', 'RESPONSIVO', 'INTERATIVO', 'MODERNO', 'BACK-END', 'FULL-STACK', 'APLICAÇÕES', 'WEB', 'MOBILE', 'PROJETOS', 'CRIATIVIDADE', 'INOVAÇÃO', 'TECNOLOGIA', 'FUTURO']

function BannerContent() {
  return (
    <span className={styles.content}>
      {words.map((word, i) => (
        <span key={i} className={styles.item}>
          {word}
          <i className="bi bi-diamond-fill" />
        </span>
      ))}
    </span>
  )
}

export default function ScrollBanner() {
  return (
    <div className={styles.banner} aria-hidden="true">
      <div className={styles.track}>
        <BannerContent />
        <BannerContent />
      </div>
    </div>
  )
}
