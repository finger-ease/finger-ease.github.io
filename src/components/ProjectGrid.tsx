import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectGrid.module.css';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
