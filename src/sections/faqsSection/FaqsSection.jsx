import { dataFaqs } from "../../data/dataFaqs";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import arrowIcon from "../../assets/arrowDropdown.png";
import styles from "./FaqsSection.module.css";

export default function FaqsSection() {
  return (
    <section className={styles.section} id="faqs">
      <div className={styles.container}>
        <SubTitleSection content="Resolvemos tus dudas" />
        <TitleSection content="Preguntas Frecuentes" />
        <div className={styles.row}>
          {dataFaqs.map((faq) => (
            <>
              <div className={styles.faqsContainer} key={faq.id}>
                <div className={styles.col1}>
                  <span className={styles.faqsNumber}>{faq.number}</span>
                </div>
                <div className={styles.col2}>
                  <details>
                    <summary className={styles.questionContainer}>
                      <h4 className={styles.question}>{faq.question}</h4>
                      <span className={styles.questionIcon}>
                        <img
                          src={arrowIcon}
                          alt="Icono de flecha desplegable"
                        />
                      </span>
                    </summary>
                    <div className={styles.answerContainer}>
                      <p className={styles.answer}>{faq.answer}</p>
                    </div>
                  </details>
                </div>
                <div className={styles.col3}></div>
              </div>
              <span></span>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
