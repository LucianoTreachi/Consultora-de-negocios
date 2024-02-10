import { useParams } from "react-router-dom";
import { dataServices } from "../../data/dataServices";
import NavigateToTop from "../../routing/NavigateToTop";
import GoBackButton from "../../components/buttons/goBackButton/GoBackButton";
import styles from "./ServiceDetail.module.css";
import Footer from "../../components/footer/Footer";

export default function ServiceDetail() {
  const { url } = useParams();
  const serviceSelected = dataServices.find((service) => service.url === url);

  return (
    <>
      <main>
        <section className={styles.section}>
          <NavigateToTop />
          <div className={styles.container}>
            <GoBackButton />
            <h1 className={styles.title}>{serviceSelected.title}</h1>

            <div className={styles.paragraph}>{serviceSelected.paragraph}</div>
            <div className={styles.containerButton}>
              <a
                className={styles.button}
                href="https://api.whatsapp.com/send?phone=2604018208"
                aria-label="Whatsapp"
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
            <img
              className={styles.image}
              src={serviceSelected.image}
              alt="Imagen de Servicio"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
