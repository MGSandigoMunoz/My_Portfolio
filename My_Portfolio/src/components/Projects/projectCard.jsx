import { getImageUrl } from "../../utils";
import styles from "./projectCard.module.css"

export const ProjectCard = ({
    // eslint-disable-next-line react/prop-types
  project: { title, imageSrc, description, skills, demo,source },
}) => {
  return (
    <div className={styles.container}>
      <img 
      src={getImageUrl(imageSrc)} 
      alt={`${title}`}
      className={styles.image}
       />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {
          // eslint-disable-next-line react/prop-types
          skills.map((skill, id) => {
            return(
            <li key={id} className={styles.skill}>{skill}</li>)
          })
        }
      </ul>
      <div className={styles.links}>
        {demo? <a href={`${demo}`} target="bank" className={styles.link}>Link</a>:"."}
        {source?<a href={`${source}`} className={styles.link}>Repositorio</a>:""}
      </div>
    </div>
  );
};
