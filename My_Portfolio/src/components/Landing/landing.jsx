// import React from 'react'
import { getImageUrl } from "../../utils"
import styles from "./landing.module.css"

export const Landing = () => {
  return (
    <section className={styles.container}> 
        <div className={styles.content}>
        <h1 className={styles.title}>Hi! I'm</h1>
        <p className={styles.description2}>Maria Gabriela</p>
        <p className={styles.description1}>FullStack developer</p>

        <img src={getImageUrl("Grulla_melon.gif")} alt="Grulla image" className={styles.grullaImg}/>

        <div className={styles.topBlur}/>
        <div className={styles.bottonBlur}/>
        </div>
    </section>
   
  )
}
