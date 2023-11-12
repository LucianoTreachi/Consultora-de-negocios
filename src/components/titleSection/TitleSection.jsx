import styles from "./TitleSection.module.css";

export default function TitleSection({ content }) {
  return <h3 className={styles.titleSection}>{content}</h3>;
}
