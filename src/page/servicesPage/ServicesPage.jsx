import { dataServices } from "../../data/dataServices";
import NavigateToTop from "../../routing/NavigateToTop";
import GoBackButton from "../../components/buttons/goBackButton/GoBackButton";
import ServicesCard from "../../components/servicesCard/ServicesCard";
import Footer from "../../components/footer/Footer";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
  return (
    <>
      <section className={styles.section} id="servicios">
        <NavigateToTop />
        <div className={styles.container}>
          <GoBackButton />
          <h1 className={styles.title}>Nuestros servicios</h1>
          <div className={styles.row}>
            {dataServices.map((service) => (
              <div key={service.url}>
                <ServicesCard content={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
