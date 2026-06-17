import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topDivider} />

        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.logo}>
              <img src="/assets/logo1.png" alt="Dion Lucas" className={styles.logoImg} />
            </div>
            <p className={styles.tagline}>dion.</p>
            <p className={styles.bio}>
              Apaixonado por criar interfaces centradas no usuário que transformam ideias em
              experiências digitais incríveis.
            </p>
          </div>

          <div className={styles.col}>
            <ul className={styles.linkList}>
              <li><a href="#about">Sobre mim</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Privacidade</a></li>
              <li><a href="#">Reembolso</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.contactItem}>dion042814@ceuma.com.br</p>
            <p className={styles.contactItem}>São Luís, Maranhão, Brasil</p>
          </div>

          <div className={styles.col}>
            <div className={styles.socialLinks}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <i className="bi bi-github" />
                <span>GitHub</span>
                <i className="bi bi-arrow-up-right" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <i className="bi bi-linkedin" />
                <span>LinkedIn</span>
                <i className="bi bi-arrow-up-right" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <i className="bi bi-instagram" />
                <span>Instagram</span>
                <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomDivider} />
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>© 2026 Dion Lucas. Todos os direitos reservados.</p>
            <p className={styles.builtWith}>Desenvolvido com React &amp; Figma</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
