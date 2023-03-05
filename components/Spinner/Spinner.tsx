import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
      }}
    >
      <div className={styles.three_body}>
        <div className={styles.three_body__dot}></div>
        <div className={styles.three_body__dot}></div>
        <div className={styles.three_body__dot}></div>
      </div>
    </div>
  );
}
