import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre mi</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/computadora.avif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Convierto ideas creativas en interfaces interactivas y atractivas. 
                Mi enfoque está en brindar experiencias de usuario intuitivas y agradables.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Me desempeño en la lógica detrás de las aplicaciones, construyendo la infraestructura
                sólida que las mantiene funcionando. Mi enfoque es la eficiencia y
                la seguridad en el desarrollo.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Docente full stack - UTN</h3>
              <p>
              Comparto mi experiencia guiando a otros en el mundo del desarrollo web. 
              Me encanta simplificar conceptos complejos y ayudar a otros a desarrollar 
              habilidades sólidas en programación
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
