import YoutubeIcon from "../icons/YoutubeIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TikTokIcon from "../icons/TikTokIcon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          © Emmanuel Mansilla | Asesor de Negocios
        </p>
        <div className={styles.socialsContainer}>
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@emanuelmansilla8209"
            aria-label="YouTube"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.box}>
              <YoutubeIcon />
            </div>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/emmanuel_mansilla1/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.box}>
              <InstagramIcon />
            </div>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/consultoraynegocioss?mibextid=2JQ9oc"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.box}>
              <FacebookIcon />
            </div>
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@emanuelmansill1"
            aria-label="TikTok"
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.box}>
              <TikTokIcon />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
