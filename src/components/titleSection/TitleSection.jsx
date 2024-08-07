import styles from "./TitleSection.module.css";

export default function TitleSection({ content }) {
  return <h2 className={styles.titleSection}>{content}</h2>;
}
