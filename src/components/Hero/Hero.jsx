import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Cecilia</h1>
        <p className={styles.description}>
          Full stack developer,  combino mi experiencia técnica con mi dedicación a la enseñanza. Con más de 2 años de experiencia como educadora en el ámbito de la programación, he guiado a numerosos estudiantes hacia el éxito en el mundo del desarrollo de software.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contactame
        </a>
      </div>
      <img
        src={getImageUrl("hero/ceci.jpg")}
        alt="Hero image imageCeci of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
