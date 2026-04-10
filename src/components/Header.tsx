import { Link } from 'react-router';
import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.siteLink}>
          <img
            src="/favicon.png"
            alt=""
            className={styles.siteLogo}
            width={28}
            height={28}
            decoding="async"
          />
          <span className={styles.siteTitle}>fingerEase / Works</span>
        </Link>
        <nav className={styles.nav} aria-label="サイト内">
          <Link to="/#projects" className={styles.navLink}>
            Projects
          </Link>
          <Link to="/#publications" className={styles.navLink}>
            Publications
          </Link>
          <Link to="/terms" className={styles.navLink}>
            Terms
          </Link>
          <Link to="/privacy" className={styles.navLink}>
            Privacy
          </Link>
        </nav>
        <div className={styles.toolbar}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
