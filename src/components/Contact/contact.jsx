import { getImageUrl } from "../../utils";
import styles from "./contact.module.css"


export const Contact = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
        Contact
        </h2>
        <ul className={styles.description1}>
           <li className={styles.description1}>Email: mgabrielasm0119@gmail.com</li>
           <li className={styles.description1}> 
           <img 
            src={getImageUrl('github.png')} 
            alt={`GithubIcon`}
            className={styles.image}
            />
           <a href={'https://github.com/MGSandigoMunoz'} target="bank">Github</a></li>
           <li className={styles.description1}>Linkedin: www.linkedin.com/in/maria-gabriela-sandigo-munoz</li>
         </ul>
        

        <div className={styles.topBlur} />
        <div className={styles.bottonBlur} />
      </div>
    </section>
  )
}
