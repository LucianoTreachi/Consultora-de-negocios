import { Link } from "react-router-dom";
import { dataServices } from "../../data/dataServices";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import styles from "./ServicesSection.module.css";
import ServicesCard from "../../components/servicesCard/ServicesCard";

export default function ServicesSection() {
  return (
    <section className={styles.section} id="servicios">
      <div className={styles.container}>
        <SubTitleSection content="Soluciones a tu alcance" />
        <TitleSection content="Nuestros servicios" />
        <div className={styles.row}>
          {dataServices.slice(0, 3).map((service) => (
            <div key={service.url}>
              <ServicesCard content={service} />
            </div>
          ))}
        </div>
        <div className={styles.containerButton}>
          <Link className={styles.button} to={`/servicios`}>
            Ver todos los servicios
            <svg
              className={styles.arrow}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
