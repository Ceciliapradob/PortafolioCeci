// Footer.jsx
import React from "react";
import { FaInstagram, FaTiktok, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./Footer.module.css"; // Asegúrate de importar tus estilos CSS

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialBox}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className={styles.contactBox}>
        <p><FaEnvelope /> ceciliaprado0799@gmail.com</p>
        <div className={styles.contactIcons}>
          
         
        </div>
        <p> <FaPhone /> +54 11 26587076</p>
      </div>
      <div className={styles.brand}>
        <p>@chicadelcodigo</p>
      </div>
    </footer>
  );
};

export { Footer };
