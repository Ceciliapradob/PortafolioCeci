// CertificatesSection.jsx
import React from "react";
import styles from "./CertificatesSection.module.css"; // Asegúrate de importar tus estilos CSS

const CertificatesSection = () => {
  // Puedes agregar más certificados según sea necesario
  const certificates = [
    {
      id: 1,
      image: "../assets/certificate/frontend.png",
      alt: "Certificado 1",
    },
    {
      id: 2,
      image: "../assets/certificate/diseñoweb.png",
      alt: "Certificado 2",
    },
    {
      id: 3,
      image: "../assets/certificate/argprograma.png",
      alt: "Certificado 3",
    },
  ];

  return (
    <section className={styles.certificatesSection}>
      <h2>Certificados</h2>
      <div className={styles.certificatesContainer}>
        {certificates.map((certificate) => (
          <div key={certificate.id} className={styles.certificateCard}>
            <img
              src={certificate.image}
              alt={certificate.alt}
              className={styles.certificateImage}
              onClick={() => handleImageClick(certificate.image)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const handleImageClick = (image) => {
  // Lógica para ampliar la imagen, por ejemplo, abrir un modal
  console.log(`Imagen ampliada: ${image}`);
};

export { CertificatesSection };
