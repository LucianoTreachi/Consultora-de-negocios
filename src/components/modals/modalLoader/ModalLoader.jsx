import styles from "./ModalLoader.module.css";

export default function ModalLoader() {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalBox}>
        <div className={styles.loader}></div>
        <h2 className={styles.message}>Estamos enviando tu mensaje</h2>
      </div>
    </div>
  );
}
