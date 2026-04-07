import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h1 className={styles.title}>fingerEase</h1>
          <p className={styles.subtitle}>個人開発プロジェクト</p>
        </div>
        <div className={styles.toolbar}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
