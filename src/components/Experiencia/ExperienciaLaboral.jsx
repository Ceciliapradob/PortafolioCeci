import React from "react";
import styles from "./ExperienciaLaboral.module.css"; // Asegúrate de importar tus estilos CSS
import frontEnd from '/assets/certificate/frontend.png'; 
import diseñoWeb from '/assets/certificate/diseñoweb.png'; 
import argPrograma from '/assets/certificate/argprograma.png'; 

const ExperienciaLaboral = () => {
  // Puedes agregar más experiencias según sea necesario
  const experiencias = [
    {
      id: 1,
      certificado: frontEnd,
      puesto: "Diplomatura frontEnd developer - UTN",
      fecha: "Ago 2022 - Dic 2022",
      descripcion: "Curso intenviso en desarrollo front end",
      linkedin: "https://www.linkedin.com/in/cecilia-prado-29601521b/",
    },
    {
      id: 2,
      certificado: diseñoWeb,
      puesto: "Docente en desarrollo web - Argentina Programa - UTN",
      fecha: "Feb 2023 - Actualmente",
      descripcion: "Cursos para dictado de desarrollo web.",
      linkedin: "https://www.linkedin.com/in/cecilia-prado-29601521b/",
    },
    {
      id: 3,
      certificado: argPrograma,
      puesto: "Docente en React Js - Arg Programa - UTN",
      fecha: "Feb 2023 - Actualmente",
      descripcion: "Dictado de cursos aplicando React Js.",
      linkedin: "https://www.linkedin.com/in/cecilia-prado-29601521b/",
    },
  ];

  return (
    <section className={styles.experienciaLaboral}>
      <hr  className={styles.line}/>
      <h2>Experiencia</h2>
      <div className={styles.experienciasContainer}>
        {experiencias.map((experiencia) => (
          <div key={experiencia.id} className={styles.experienciaCard}>
            <img
              src={experiencia.certificado}
              alt={`Certificado ${experiencia.id}`}
              className={styles.certificadoImage}
            />
            <div className={styles.infoContainer}>
              <h3>{experiencia.puesto}</h3>
              <p>{experiencia.fecha}</p>
              <p>{experiencia.descripcion}</p>
              <a href={experiencia.linkedin} target="_blank" rel="noopener noreferrer">
                <button>Ver más</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ExperienciaLaboral };
