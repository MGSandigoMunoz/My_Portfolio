import styles from "./aboutMe.module.css";

export const AboutMe = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.icon}>🌱</span> About Me
        </h2>

        <p className={styles.description2}>
          I am a passionate{" "}
          <strong>Fullstack Software Developer from Colombia</strong>, with a
          strong focus on backend development and system architecture. I have
          professional experience working on <strong>B2B SaaS products</strong>,
          building scalable and maintainable solutions using modern JavaScript
          technologies.
          <br />
          <br />
          My main stack includes{" "}
          <strong>Node.js, Express, MongoDB, PostgreSQL, and React</strong>,
          along with tools such as Sequelize, Mongoose, Redux Toolkit, and
          TypeScript. I enjoy designing RESTful APIs, structuring backend
          applications, and modernizing legacy systems, always with an emphasis
          on clean code and performance.
          <br />
          <br />
          In addition to my technical background, I hold a degree in{" "}
          <strong>Geological Engineering</strong> and a specialization in{" "}
          <strong>Environmental Management</strong>, which strengthened my
          analytical thinking and problem-solving skills.
          <br />
          <br />I value clear communication, teamwork, and continuous learning.
          If you are interested in my profile, feel free to get in touch 😊
        </p>

        <div className={styles.topBlur} />
        <div className={styles.bottonBlur} />
      </div>
    </section>
  );
};
