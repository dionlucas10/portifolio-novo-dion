import { useContactForm } from '../../hooks/useContactForm'
import styles from './Contact.module.css'

export default function Contact() {
  const { fields, submitted, loading, error, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Agende uma Conversa</h2>
          <div className={styles.divider} />
        </div>

        <div className={styles.body}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.input}
                placeholder="Digite seu nome"
                value={fields.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.input}
                placeholder="Digite seu e-mail"
                value={fields.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="phone">WhatsApp / Telefone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={styles.input}
                placeholder="(00) 00000-0000"
                value={fields.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="interest">Tenho interesse em</label>
              <div className={styles.selectWrapper}>
                <select
                  id="interest"
                  name="interest"
                  className={styles.select}
                  value={fields.interest}
                  onChange={handleChange}
                >
                  <option value="">— Escolha uma opção —</option>
                  <option value="frontend">Desenvolvimento Front-End</option>
                  <option value="backend">Desenvolvimento Back-End</option>
                  <option value="design">Design UI/UX</option>
                  <option value="fullstack">Projeto Full-Stack</option>
                  <option value="consultoria">Consultoria</option>
                </select>
                <i className={`bi bi-chevron-down ${styles.selectArrow}`} />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                placeholder="Escreva sua mensagem"
                value={fields.message}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {submitted
                ? <><i className="bi bi-check-lg" /> ENVIADO!</>
                : loading
                ? <><i className="bi bi-hourglass-split" /> ENVIANDO...</>
                : <><i className="bi bi-send" /> ENVIAR AGORA</>
              }
            </button>
            {error && <p className={styles.errorMsg}>{error}</p>}
          </form>

          <div className={styles.rightDecor}>
            <h3 className={styles.rightTitle}>Vamos Conversar</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
