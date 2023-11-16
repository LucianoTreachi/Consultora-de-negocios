import styles from "./ModalVideo.module.css";

export default function ModalVideo({ closeModalVideo }) {
  return (
    <div className={styles.modalBackdrop} onClick={closeModalVideo}>
      <button
        className={styles.closeModalButton}
        onClick={closeModalVideo}
        title="Cerrar modal"
      >
        <span></span>
        <span></span>
      </button>
      <div className={styles.modalBox}>
        <iframe
          width="760"
          height="428"
          src="https://www.youtube.com/embed/dQH5nyK-dHU?si=7bvnVa_ik6et12zq"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
