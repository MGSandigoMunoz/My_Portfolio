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
            ? getImageUrl("Nav/closeIcon.png") 
            : getImageUrl("Nav/menuIcon.png") }
          alt="menu-button"
          onClick={()=> setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=> setMenuOpen(false)}
        >
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li >
            <Link to="/aboutMe">About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
