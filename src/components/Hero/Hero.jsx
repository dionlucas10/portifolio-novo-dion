import styles from './Hero.module.css'

const floatingLogos = [
  { src: '/assets/logos/physics.png',    alt: 'React',       top: '18%', left:  '6%',  delay: '0s',   duration: '4.2s' },
  { src: '/assets/logos/figma.png',      alt: 'Figma',       top: '12%', right: '8%',  delay: '1.1s', duration: '5s'   },
  { src: '/assets/logos/programing.png', alt: 'Next.js',     top: '38%', left:  '3%',  delay: '0.6s', duration: '4.6s' },
  { src: '/assets/logos/html.png',       alt: 'HTML5',       top: '65%', left:  '7%',  delay: '1.8s', duration: '3.9s' },
  { src: '/assets/logos/css-3.png',      alt: 'CSS3',        top: '75%', right: '6%',  delay: '0.3s', duration: '4.8s' },
  { src: '/assets/logos/java-script.png',alt: 'JavaScript',  top: '22%', right: '5%',  delay: '2s',   duration: '5.2s' },
  { src: '/assets/logos/typescript.png', alt: 'TypeScript',  top: '55%', right: '4%',  delay: '1.4s', duration: '4s'   },
  { src: '/assets/logos/node-js.png',    alt: 'Node.js',     top: '82%', left:  '4%',  delay: '0.9s', duration: '4.4s' },
  { src: '/assets/logos/github.png',     alt: 'GitHub',      top: '48%', right: '3%',  delay: '1.6s', duration: '4.7s' },
  { src: '/assets/logos/python.png',     alt: 'Python',      top: '88%', right: '7%',  delay: '0.4s', duration: '5.1s' },
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />

      {/* Logos flutuantes */}
      {floatingLogos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className={styles.floatingLogo}
          aria-hidden="true"
          style={{
            top: logo.top,
            left: logo.left,
            right: logo.right,
            animationDelay: logo.delay,
            animationDuration: logo.duration,
          }}
        />
      ))}

      <div className={styles.content}>
        <p className={styles.imA}>I'M A</p>

        <div className={styles.textPhoto}>
          <h1 className={styles.software}>SOFTWARE</h1>
          <h1 className={`${styles.software} ${styles.textStroke}`} aria-hidden="true">SOFTWARE</h1>
          <div className={styles.photoWrapper}>
            <img
              src="/assets/PXL_20240721_173453884__1_-removebg-preview.png"
              alt="Dion Lucas"
              className={styles.photo}
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          <h1 className={styles.developer}>DEVELOPER</h1>
          <h1 className={`${styles.developer} ${styles.textStroke}`} aria-hidden="true">DEVELOPER</h1>
        </div>
      </div>

      <div className={styles.circleWrapper} aria-hidden="true">
        <div className={styles.circleBg} />
        <svg className={styles.circleText} viewBox="0 0 200 200">
          <path
            id="circlePath"
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text>
            <textPath href="#circlePath" startOffset="0%">
              EXPLORAR MAIS · VER ROLE PARA VER MAIS ·
            </textPath>
          </text>
        </svg>
        <i className={`bi bi-mouse2 ${styles.mouseIcon}`} />
      </div>

      <div className={styles.arrow} aria-hidden="true">
        <i className="bi bi-arrow-up-right" />
      </div>

      <div className={styles.decorSquares} aria-hidden="true">
        <span className={styles.sq1} />
        <span className={styles.sq2} />
      </div>
    </section>
  )
}
