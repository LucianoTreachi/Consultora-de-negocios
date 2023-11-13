import styles from "./ModalContactError.module.css";

export default function ModalContactError({ closeModalError }) {
  return (
    <div className={styles.modalBackdrop} onClick={closeModalError}>
      <div className={styles.modalBox}>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>Error al enviar el mensaje</h2>
          <p className={styles.modalParagraph}>
            Se producjo un error temporal. Te pedimos disculpas. Vuelve a
            intentarlo más tarde.
          </p>
          <button className={styles.closeButton} onClick={closeModalError}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
