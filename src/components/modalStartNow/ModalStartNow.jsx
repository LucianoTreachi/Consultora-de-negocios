import styles from "./ModalStartNow.module.css";

export default function ModalStartNow({ closeModal }) {
  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalBox}>
        <div className={styles.modalHeader}>
          <svg
            className={styles.closeIconModal}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={closeModal}
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
          </svg>
        </div>
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
