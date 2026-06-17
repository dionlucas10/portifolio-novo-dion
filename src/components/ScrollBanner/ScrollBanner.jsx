import styles from './ScrollBanner.module.css'

const text = 'ESBOÇO ✦ DESIGN ✦ DESENVOLVIMENTO ✦ FRONT-END ✦ UI/UX ✦ '

export default function ScrollBanner() {
  return (
    <div className={styles.banner} aria-hidden="true">
      <div className={styles.track}>
        <span className={styles.content}>{text.repeat(4)}</span>
        <span className={styles.content} aria-hidden="true">{text.repeat(4)}</span>
      </div>
    </div>
  )
}
