import { useState } from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>


        <img
          className={styles.menuBtn}
          src={
            menuOpen 
            ? getImageUrl("Nav/closeIcon.jpg") 
            : getImageUrl("Nav/menuIcon.png") }
          alt="menu-button"
          onClick={()=> setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=> setMenuOpen(false)}
        >
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li >
            <Link to="/aboutMe">Acerca de mi</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
          <li>
            <Link to="/projects">Proyectos</Link>
          </li>
          <li>
            <Link to="contact">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
