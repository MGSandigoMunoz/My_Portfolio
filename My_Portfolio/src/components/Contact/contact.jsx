
import styles from "./contact.module.css"

export const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Contacto
        </h2>
        <ul className={styles.contacts}>
          <li className={styles.contact}>Email: mgabrielasm0119@gmail.com</li>
          <li className={styles.contact}>Github: https://github.com/MGSandigoMunoz</li>
          <li className={styles.contact}>Linkedin: www.linkedin.com/in/maria-gabriela-sandigo-munoz</li>
        </ul>
      </div>
    </section>
  )
}
