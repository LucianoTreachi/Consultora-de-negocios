import { useState } from "react";
import ModalStartNow from "../../components/modalStartNow/ModalStartNow";
import ModalVideo from "../../components/modalVideo/ModalVideo";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import homeImage from "../../assets/homeImage.webp";
import iconPresentation from "../../assets/playPresentation.png";
import TitlePattern from "../../assets/titlePattern.png";
import styles from "./HomeSection.module.css";

export default function HomeSection() {
  const [modalStartNowVisible, setModalStartNowVisible] = useState(false);
  const [modalVideoVisible, setModalVideoVisible] = useState(false);

  const openModalStartNow = () => {
    setModalStartNowVisible(true);
  };

  const closeModal = () => {
    setModalStartNowVisible(false);
  };

  const openModalVideo = () => {
    setModalVideoVisible(true);
  };

  const closeModalVideo = () => {
    setModalVideoVisible(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h1 className={styles.mainTitle}>
            <span>
              Transformamos Tu Negocio en una Historia de Éxito
              <img className={styles.pattern} src={TitlePattern} alt="Icono" />
            </span>
          </h1>
          <p className={styles.paragraph}>
            ¿Estás buscando ayuda para tu negocio? ¿Querés alcanzar el éxito? Te
            ofrecemos los servicios que necesitás para lograrlo.
          </p>
          <div className={styles.containerButtons}>
            <PrimaryButton
              content="Empieza ahora"
              showArrow={true}
              onClick={openModalStartNow}
            />
            <button className={styles.secondaryButton} onClick={openModalVideo}>
              <img src={iconPresentation} alt="Icono de Presentación" />
              Conócenos
            </button>
          </div>
        </div>
        <div className={styles.col2}>
          <img className={styles.image} src={homeImage} alt="Imagen del Home" />
        </div>
      </div>
      {modalStartNowVisible && <ModalStartNow closeModal={closeModal} />}
      {modalVideoVisible && <ModalVideo closeModalVideo={closeModalVideo} />}
    </section>
  );
}
