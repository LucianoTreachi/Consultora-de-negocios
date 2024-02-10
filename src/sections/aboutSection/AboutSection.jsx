import aboutImage from "../../assets/aboutImage.webp";
import iconLamp from "../../assets/iconLamp.png";
import iconTool from "../../assets/iconTool.png";
import iconRocket from "../../assets/iconRocket.png";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section} id="sobre-mi">
      <div className={styles.container}>
        <div className={styles.row1}>
          <h2>
            Te proporcionamos el saber que necesitás para{" "}
            <strong>Elevar tu negocio al siguiente nivel.</strong>
          </h2>
        </div>
        <div className={styles.row2}>
          <div className={styles.col1}>
            <img
              className={aboutImage}
              src={aboutImage}
              alt="Imagen de Emmanuel Mansilla"
            />
          </div>
          <div className={styles.col2}>
            <div className={styles.box1}>
              <p>
                Soy <strong>Emmanuel Mansilla</strong>, un apasionado consultor
                de negocios con una amplia trayectoria y estoy aquí para
                brindarte mi experiencia y trabajar codo a codo con vos en el
                crecimiento de tu empresa.
              </p>
            </div>
            <div className={styles.box2}>
              <p>
                Nuestra misión es proporcionarte los conocimientos esenciales
                para unirte al selecto grupo de visionarios que se atreven a
                llevar su empresa al siguiente nivel, abriendo las puertas hacia
                el <strong>éxito empresarial.</strong>
              </p>
            </div>
          </div>
        </div>
        <h2 className={styles.intermediateTitle}>Confían en Nosotros</h2>
        <div className={styles.row3}>
          <div className={styles.box1}>
            <span>
              <img src={iconLamp} alt="Icono de lámpara" />
            </span>
            <h3>Emprendedores Audaces</h3>
          </div>
          <div className={styles.box2}>
            <span>
              <img src={iconTool} alt="Icono de herramienta" />
            </span>
            <h3>Profesionales Comprometidos</h3>
          </div>
          <div className={styles.box3}>
            <span>
              <img src={iconRocket} alt="Icono de cohete" />
            </span>
            <h3>Empresarios Visionarios</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
