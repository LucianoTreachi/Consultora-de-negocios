import iconSuccess from "../../assets/envio-exitoso.png";
import styles from "./ModalContactSuccess.module.css";

export default function ModalContactSuccess({ closeModalSuccess }) {
  return (
    <div className={styles.modalBackdrop} onClick={closeModalSuccess}>
      <div className={styles.modalBox}>
        <div className={styles.modalContent}>
          <img
            className={styles.modalIcon}
            src={iconSuccess}
            alt="Icono de envío exitoso"
          />
          <h2 className={styles.modalTitle}>
            ¡Muchas gracias por contactarnos!
          </h2>
          <p className={styles.modalParagraph}>
            Tu mensaje se ha enviado correctamente. Te responderemos lo antes
            posible.
          </p>
          <button className={styles.closeButton} onClick={closeModalSuccess}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
