import { useEffect, useState } from "react";
import whatsappButtonImage from "../../../assets/whatsappLogo.png";
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a
          className={`${styles.whatsappButton} ${
            isVisible ? styles.appear : ""
          }`}
          href="https://api.whatsapp.com/send?phone=2604018208"
          aria-label="Escríbenos por Whatsapp"
          title="Escríbenos por Whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappButtonImage} alt="Logo de Whatsapp" />
        </a>
      )}
    </>
  );
}
