import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SubTitleSection from "../../components/subtitleSection/SubTitleSection";
import TitleSection from "../../components/titleSection/TitleSection";
import SocialLink from "../../components/buttons/socialLink/SocialLink";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import ModalLoader from "../../components/modals/modalLoader/ModalLoader";
import ModalContactSuccess from "../../components/modals/modalContactSuccess/ModalContactSuccess";
import ModalContactError from "../../components/modals/modalContactError/ModalContactError";
import IconEmail from "../../assets/iconEmail.png";
import IconFacebook from "../../assets/iconFacebook.png";
import IconYoutube from "../../assets/iconYoutube.png";
import IconInstagram from "../../assets/iconInstagram.png";
import IconTiktok from "../../assets/IconTiktok.png";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [showModalLoader, setShowModalLoader] = useState(false);
  const [showModalContactSuccess, setShowModalContactSuccess] = useState(false);
  const [showModalContactError, setShowModalContactError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Display modal loader when the user submits the form
    setShowModalLoader(true);

    // Delay the sending of the message with setTimeout
    setTimeout(() => {
      // Email Js service
      emailjs
        .sendForm(
          "service_t91u2hp",
          "template_xch1h9b",
          form.current,
          "kHwvebyDYvxL3tKz0"
        )
        .then(
          () => {
            openModalContactSuccess();
            form.current.reset();
          },
          () => {
            openModalContactError();
            form.current.reset();
          }
        )
        .finally(() => {
          // Hide the loader after the promise is resolved or rejected
          setShowModalLoader(false);
        });
    }, 4000);
  };

  const openModalContactSuccess = () => {
    setShowModalContactSuccess(true);
  };

  const closeModalSuccess = () => {
    setShowModalContactSuccess(false);
  };

  const openModalContactError = () => {
    setShowModalContactError(true);
  };

  const closeModalError = () => {
    setShowModalContactError(false);
  };

  return (
    <>
      <section className={styles.section} id="contacto">
        <div className={styles.container}>
          <SubTitleSection content="Estamos para Ayudarte" />
          <TitleSection content="Contactanos" />
          <div className={styles.row}>
            <div className={styles.col1}>
              <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <label className={styles.containerInput}>
                  <span className={styles.info}>Nombre completo</span>
                  <input
                    className={styles.textField}
                    type="text"
                    id="name"
                    placeholder="Escribí tu nombre completo"
                    autoComplete="name"
                    maxLength={50}
                    name="user_name"
                    required
                  />
                </label>
                <label className={styles.containerInput}>
                  <span className={styles.info}>Correo electrónico</span>
                  <input
                    className={styles.textField}
                    type="email"
                    id="email"
                    placeholder="Escribí tu correo electrónico"
                    autoComplete="email"
                    maxLength={50}
                    name="user_email"
                    required
                  />
                </label>
                <label className={styles.containerInput}>
                  <span className={styles.info}>Número de teléfono</span>
                  <input
                    className={styles.textField}
                    type="phone"
                    id="number"
                    placeholder="Escribí tu número de teléfono"
                    autoComplete="number"
                    maxLength={50}
                    name="user_phone"
                    required
                  />
                </label>
                <label className={styles.containerInput}>
                  <span className={styles.info}>Mensaje</span>
                  <textarea
                    className={styles.textField}
                    id="textarea"
                    placeholder="Dejanos tu mensaje"
                    maxLength={800}
                    name="message"
                    required
                  ></textarea>
                </label>
                <div className={styles.containerButtons}>
                  <PrimaryButton
                    content="Enviar"
                    showArrow={false}
                    type={"submit"}
                  />
                </div>
              </form>
            </div>
            <div className={styles.col2}>
              <SocialLink
                social="Correo electrónico"
                href="mailto:emmanuelmansilla493@gmail.com"
                imgSrc={IconEmail}
                name="emmanuelmansilla493@gmail.com"
              />
              <SocialLink
                social="Facebook"
                href="https://www.facebook.com/consultoraynegocioss/"
                imgSrc={IconFacebook}
                name="Emmanuel Mansilla"
              />
              <SocialLink
                social="Youtube"
                href="https://www.youtube.com/@emanuelmansilla8209"
                imgSrc={IconYoutube}
                name="emmanuelmansilla8209"
              />
              <SocialLink
                social="Instagram"
                href="https://www.instagram.com/emmanuel_mansilla1/"
                imgSrc={IconInstagram}
                name="emmanuel_mansilla1"
              />
              <SocialLink
                social="Tiktok"
                href="https://www.tiktok.com/@emanuelmansill1"
                imgSrc={IconTiktok}
                name="emmanuelmansilla1"
              />
            </div>
          </div>
        </div>
      </section>
      {/* When showModalLoader is true, show ModalLoader  */}
      {showModalLoader && <ModalLoader />}{" "}
      {/* When showModalContactSuccess is true, show ModalContactSuccess  */}
      {showModalContactSuccess && (
        <ModalContactSuccess closeModalSuccess={closeModalSuccess} />
      )}
      {/* When showModalContactError is true, show ModalContactError  */}
      {showModalContactError && (
        <ModalContactError closeModalError={closeModalError} />
      )}
    </>
  );
}
