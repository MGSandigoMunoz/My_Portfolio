import { getImageUrl } from "../../utils"
import styles from "./aboutMe.module.css"

export const AboutMe = () => {
  return (
    <section className={styles.container}> 
    <div className={styles.content}>
    {/* <h3 className={styles.title}>On construction</h3> */}
    <p className={styles.description2}>On construction...</p>
    {/* <p className={styles.description1}>FullStack developer</p> */}

    <img src={getImageUrl("Grulla_Construction.gif")} alt="Grulla image" className={styles.grullaImg}/>

    <div className={styles.topBlur}/>
    <div className={styles.bottonBlur}/>
    </div>
</section>
  )
}
