import { dataBenefits } from "../../data/dataBenefits";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import BenefitsBg from "../../assets/benefitsStar.png";
import styles from "./BenefitsSection.module.css";

export default function BenefitsSection() {
  return (
    <section className={styles.section} id="beneficios">
      <div className={styles.container}>
        <SubTitleSection content="Hacemos la diferencia" />
        <TitleSection content="Beneficios de elegirnos" />
        <div className={styles.row}>
          {dataBenefits.map((benefit) => (
            <div className={styles.card} key={benefit.id}>
              <div className={styles.boxIcon}>{benefit.icon}</div>
              <h4 className={styles.cardTitle}>{benefit.title}</h4>
              <p className={styles.cardParagraph}>{benefit.paragraph}</p>
            </div>
          ))}
          <div className={styles.background}>
            <img src={BenefitsBg} alt="Icono de estrella" />
          </div>
        </div>
      </div>
    </section>
  );
}
