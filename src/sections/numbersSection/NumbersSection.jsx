import styles from "./NumbersSection.module.css";

export default function NumbersSection() {
  return (
    <section className={styles.section} aria-label="Nuestros números">
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>+200</h2>
          <p>Clientes satisfechos</p>
        </div>
        <div className={styles.box}>
          <h2>+3</h2>
          <p>Años de experiencia</p>
        </div>
        <div className={styles.box}>
          <h2>92%</h2>
          <p>Tasa de éxito</p>
        </div>
        <div className={styles.box}>
          <h2>4.3</h2>
          <p>Satisfacción</p>
        </div>
      </div>
    </section>
  );
}
