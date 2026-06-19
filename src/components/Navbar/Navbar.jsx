import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.logo}>
          <img src="/assets/logo1.png" alt="Dion Lucas" className={styles.logoImg} />
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#hero">INÍCIO</a></li>
          <li><a href="#about">SOBRE MIM</a></li>
          <li><a href="#projects">PROJETOS</a></li>
          <li><a href="#technologies">TECNOLOGIAS</a></li>
          <li><a href="#certificates">CERTIFICADOS</a></li>
          <li><a href="#experience">TRILHA</a></li>
          <li><a href="#contact">CONTATO</a></li>
        </ul>

        <div className={styles.navRight}>
          <a href="https://canva.link/7uhu8g0tgejx0ei" className={styles.cvBtn} download>
            BAIXAR CV
          </a>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`} />
        </button>
      </nav>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            <li><a href="#hero" onClick={closeMenu}>INÍCIO</a></li>
            <li><a href="#about" onClick={closeMenu}>PÁGINAS</a></li>
            <li><a href="#about" onClick={closeMenu}>SERVIÇOS</a></li>
            <li><a href="#projects" onClick={closeMenu}>PROJETOS</a></li>
            <li><a href="#contact" onClick={closeMenu}>BLOG</a></li>
            <li><a href="#contact" onClick={closeMenu}>CONTATO</a></li>
          </ul>

          <div className={styles.mobileSocial}>
            <a href="#" aria-label="Stats"><i className="bi bi-bar-chart-fill" /></a>
            <a href="#" aria-label="Info"><i className="bi bi-info-circle" /></a>
            <a href="#" aria-label="Globe"><i className="bi bi-globe" /></a>
          </div>

          <a href="/cv.pdf" className={styles.mobileCv} download onClick={closeMenu}>
            BAIXAR CV
          </a>
        </div>
      )}
    </>
  )
}
