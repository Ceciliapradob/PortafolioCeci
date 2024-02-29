// ContactForm.jsx
import React, { useRef, useState } from "react";
import styles from "./Contact.module.css"; // Asegúrate de importar tus estilos CSS
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gqxkrid', 'template_z4s8kbw', form.current, 'YNeCEgdNT4Pg6aoun')
      .then((result) => {
        console.log(result.text);
        setSuccessMessage('¡Gracias por contactarme, tu mensaje ha sido enviado con éxito!');
        // Resetear el formulario
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form className={styles.contactForm} ref={form} onSubmit={sendEmail} id="contact">
      <input
        type="text"
        name="user_name"

        placeholder="Nombre"
      />
      <input
        type="email"
        name="user_email"

        placeholder="Correo electrónico"
      />
      <textarea
        name="user_message"

        placeholder="Mensaje"
      />
      <button type="submit">Enviar</button>
      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
    </form>
  );
};

export { Contact };
