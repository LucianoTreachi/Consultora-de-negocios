import styles from "./ServicesCard.module.css";
import { Link } from "react-router-dom";
import serviceArrow from "../../assets/serviceArrow.png";

export default function ServicesCard({ content }) {
  return (
    <Link
      className={styles.card}
      key={content.url}
      to={`/servicio/${content.url}`}
    >
      <div>
        <img
          className={styles.cardImage}
          src={content.image}
          alt="Imagen de servicio"
        />
      </div>
      <div className={styles.cardText}>
        <h4 className={styles.cardTitle}>{content.title}</h4>
        <div className={styles.cardArrow}>
          <img src={serviceArrow} alt="Icono de flecha" />
        </div>
      </div>
    </Link>
  );
}
