import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Documents</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Connexion</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
