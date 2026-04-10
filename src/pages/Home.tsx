import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { PageTitle } from '../components/PageTitle';
import { ProjectGrid } from '../components/ProjectGrid';
import { PublicationSection } from '../components/PublicationSection';
import { projects } from '../data/projects';
import { publications } from '../data/publications';

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    const id = hash.replace(/^#/, '');
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [hash]);

  return (
    <main>
      <PageTitle
        title="Top"
        description="公開中のサービスと、技術ブログ・登壇資料などのリンクをまとめています。"
      />
      <ProjectGrid projects={projects} />
      <PublicationSection items={publications} />
    </main>
  );
}
