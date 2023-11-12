import styles from "./NumbersSection.module.css";

export default function NumbersSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>+800</h2>
          <p>Clientes satisfechos</p>
        </div>
        <span></span>
        <div className={styles.box}>
          <h2>+3</h2>
          <p>Años de experiencia</p>
        </div>
        <span></span>
        <div className={styles.box}>
          <h2>92%</h2>
          <p>Tasa de éxito</p>
        </div>
        <span></span>
        <div className={styles.box}>
          <h2>4.3</h2>
          <p>Satisfacción</p>
        </div>
      </div>
    </section>
  );
}
