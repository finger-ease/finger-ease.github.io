import { Link } from 'react-router';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} fingerEase
        </p>
        <nav className={styles.nav}>
          <Link to="/terms" className={styles.link}>
            利用規約 / Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
