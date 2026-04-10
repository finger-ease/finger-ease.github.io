import { PageTitle } from '../components/PageTitle';
import { ProjectGrid } from '../components/ProjectGrid';
import { PublicationSection } from '../components/PublicationSection';
import { projects } from '../data/projects';
import { publications } from '../data/publications';

export function Home() {
  return (
    <main>
      <PageTitle
        title="Top"
        description="公開中のサービスと、技術ブログ・登壇などのリンクをまとめています。"
      />
      <ProjectGrid projects={projects} />
      <PublicationSection items={publications} />
    </main>
  );
}
