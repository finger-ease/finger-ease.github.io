import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section
      className={styles.section}
      aria-labelledby="projects-heading"
    >
      <div className={styles.inner}>
        <h2 id="projects-heading" className={styles.heading}>
          Projects
        </h2>
        <p className={styles.lead}>
          公開中の個人開発サービス一覧です。
        </p>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
