import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import styles from "./About.module.css";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className={styles.about}>
      <div className={styles.circleDecor} aria-hidden="true">
        <svg viewBox="0 0 200 200" className={styles.circleTextSvg}>
          <path
            id="aboutCircle"
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
          <text>
            <textPath href="#aboutCircle" startOffset="0%">
              EXPLORAR MAIS · VER ROLE PARA VER MAIS ·
            </textPath>
          </text>
        </svg>
        <span className={styles.dot} />
      </div>

      <div className={`${styles.container} fade-in`} ref={ref}>
        <div className={styles.left}>
          <p className={styles.hello}>OLÁ</p>
          <h2 className={styles.name}>SOU DION LUCAS</h2>
          <p className={styles.bio}>
            Desenvolvedor de Software apaixonado por transformar ideias em
            soluções digitais inovadoras e eficientes. Atualmente graduando em
            Engenharia da Computação, busco unir conhecimento técnico,
            criatividade e resolução de problemas para desenvolver aplicações
            que gerem impacto real. Tenho experiência com desenvolvimento de
            software, atenção aos detalhes e foco na criação de soluções
            funcionais, escaláveis e centradas nas necessidades dos usuários.
            Estou sempre em constante aprendizado, explorando novas tecnologias
            e aprimorando minhas habilidades para enfrentar desafios cada vez
            maiores.
          </p>

          <div className={styles.stats}>
            <div className={styles.statDivider} />
            <div className={styles.statRow}>
              <span className={`bi bi-cpu ${styles.statIcon}`} />
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>ANOS DE EXPERIÊNCIA</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statRow}>
              <span className={`bi bi-palette ${styles.statIcon}`} />
              <span className={styles.statNumber}>12+</span>
              <span className={styles.statLabel}>PROJETOS CONCLUÍDOS</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statRow}>
              <span className={`bi bi-tools ${styles.statIcon}`} />
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>CLIENTES SATISFEITOS</span>
            </div>
            <div className={styles.statDivider} />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photoPlaceholder}>
            <img
              src="/assets/WhatsApp_Image_2026-06-10_at_13.14.15-removebg-preview.png"
              alt="Dion Lucas"
              className={styles.photo}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
