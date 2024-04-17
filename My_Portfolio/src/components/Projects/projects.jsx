import projects from "../../Data/projects.json"
import { ProjectCard } from "./projectCard"
import styles from "./projects.module.css"



export const Projects = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <div className={styles.projects}>{
          projects.map((project, id)=>{
              return <ProjectCard key={id} project={project}/>
            })}
        </div>
        <div className={styles.topBlur}/>
        <div className={styles.bottonBlur}/>
      </div>
    </section>
  )
}
