import { getImageUrl } from "../../utils"
import projects from "../../Data/projects.json"
import { ProjectCard } from "./projectCard"
import styles from "./projects.module.css"



export const Projects = () => {
  return (
    <div>
    En construcion
    <img
    src={getImageUrl("Grulla_Construction.gif")}
    />

    <section className={styles.container}>
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projects}>{
      projects.map((project, id)=>{
          return <ProjectCard key={id} project={project}/>
        })}
      </div>
    </section>
  </div>
  )
}
