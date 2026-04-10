import { Link } from 'react-router';
import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.siteLink}>
          fingerEase
        </Link>
        <div className={styles.toolbar}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
