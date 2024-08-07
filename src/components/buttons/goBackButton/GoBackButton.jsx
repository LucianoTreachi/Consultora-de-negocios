import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../../icons/ArrowLeft";
import styles from "./GoBackButton.module.css";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={styles.button}>
      <ArrowLeft className={styles.arrow} />
      Volver atrás
    </button>
  );
}
