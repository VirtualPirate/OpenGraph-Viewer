import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>
        <span style={{ color: "#AE92FF" }}>OPENGRAPH</span> VIEWER
      </h1>
    </nav>
  );
}
