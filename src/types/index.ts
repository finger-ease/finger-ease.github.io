export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  repoUrl?: string;
}

export type PublicationKind = 'blog' | 'slide' | 'other';

export interface Publication {
  title: string;
  url: string;
  kind: PublicationKind;
  date?: string;
}
