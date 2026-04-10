import type { Publication, PublicationKind } from '../types';
import styles from './PublicationSection.module.css';

const kindLabel: Record<PublicationKind, string> = {
  blog: '記事',
  slide: '資料',
  other: 'その他',
};

interface PublicationSectionProps {
  items: Publication[];
}

function sortByDateDescending(a: Publication, b: Publication): number {
  const da = a.date ?? '';
  const db = b.date ?? '';
  if (!da && !db) return 0;
  if (!da) return 1;
  if (!db) return -1;
  return db.localeCompare(da);
}

export function PublicationSection({ items }: PublicationSectionProps) {
  if (items.length === 0) {
    return null;
  }

  const sorted = [...items].sort(sortByDateDescending);

  return (
    <section
      id="publications"
      className={styles.section}
      aria-labelledby="publications-heading"
    >
      <div className={styles.inner}>
        <h2 id="publications-heading" className={styles.heading}>
          Publications
        </h2>
        <p className={styles.lead}>
          執筆した記事や登壇・公開資料へのリンクです。
        </p>
        <ul className={styles.list}>
          {sorted.map((item) => (
            <li key={item.url} className={styles.item}>
              <div className={styles.itemRow}>
                <span className={styles.kind}>{kindLabel[item.kind]}</span>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.titleLink}
                >
                  {item.title}
                  <svg
                    className={styles.externalIcon}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
                {item.date && (
                  <time className={styles.date} dateTime={item.date}>
                    {item.date}
                  </time>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
