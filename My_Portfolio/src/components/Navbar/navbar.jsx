// import React, {useState} from "react";
// import GrullaLogo from "../../../assets/Grulla_logo"
import {getImageUrl} from "../../utils"
import styles from "./navbar.module.css"


export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={getImageUrl("Grulla_melon.gif")}/>
        <ul className={styles.menuItems}>
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#CV">CV</a>
          </li>
          <li>
            <a href="#Contac">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
