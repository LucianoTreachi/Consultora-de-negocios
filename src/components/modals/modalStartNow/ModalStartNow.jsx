import styles from "./ModalStartNow.module.css";

export default function ModalStartNow({ closeModal }) {
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <button
        className={styles.closeModalButton}
        onClick={closeModal}
        title="Cerrar modal"
      >
        <span></span>
        <span></span>
      </button>
      <div className={styles.modalBox}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>¡Comienza el cambio ahora!</h2>
          <p className={styles.modalParagrapgh}>
            ¿Estás buscando ayuda para tu negocio? ¿Querés alcanzar el éxito? Te
            ofrecemos los servicios que necesitás para lograrlo.
          </p>
          <a
            className={styles.button}
            href="https://api.whatsapp.com/send?phone=2604018208"
            aria-label="Solicitar asesoramiento a través de Whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar asesoramiento
            <svg
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
