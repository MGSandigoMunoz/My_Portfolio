import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import { Landing } from "./components/Landing/landing";
import { AboutMe } from "./components/AboutMe/aboutMe";
import { Projects } from "./components/Projects/projects";
import { Contact } from "./components/Contact/contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/aboutMe" element={<AboutMe />}>
          Acerca de mi
        </Route>
        <Route path="/projects" element={<Projects />}>
          Proyectos
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
    </div>
  );
}

export default App;
