import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeaderScrolled, setHeaderScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderScrolled(true);
    } else {
      setHeaderScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isHeaderScrolled ? styles.headerScrolled : ""
      }`}
    >
      <nav className={styles.nav}>
        {/* Logo */}
        <a className={styles.logo} href="/">
          <img src={logo} alt="Logo" />
        </a>
        {/* Menu */}
        <div className={`${styles.menu} ${isOpen && styles.open}`}>
          {/* Links */}
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("sobre-mi")}
          >
            Acerca De
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("servicios")}
          >
            Servicios
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("beneficios")}
          >
            Beneficios
          </Link>
          <Link
            className={styles.menuLink}
            onClick={() => scrollToSection("testimonios")}
          >
            Testimonios
          </Link>
          <Link
            className={styles.contactButtonInside}
            onClick={() => scrollToSection("contacto")}
          >
            Contáctanos
          </Link>
        </div>
        <Link
          className={styles.contactButtonOutside}
          onClick={() => scrollToSection("contacto")}
        >
          Contáctanos
        </Link>
      </nav>
      {/* Open Menu Icon */}
      <button
        className={`${styles.buttonMenu} ${
          isOpen ? styles.buttonMenuClose : ""
        }`}
        onClick={toggleMenu}
        title={isOpen ? "Ocultar menú lateral" : "Desplegar menú lateral"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
