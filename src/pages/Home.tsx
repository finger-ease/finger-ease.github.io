import { ProjectGrid } from '../components/ProjectGrid';
import { projects } from '../data/projects';

export function Home() {
  return (
    <main>
      <ProjectGrid projects={projects} />
    </main>
  );
}
