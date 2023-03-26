type ProjectStatus = 'active' | 'archival';
const ProjectNames = ['test1', 'test2', 'test3'] as const;
const ProjectHashtags = [
  'ekologia',
  'wystawa',
  'papier',
  'budowa',
  'prototyp',
  'sztuka',
  'wykłady',
  'badania',
] as const;

export type ProjectCardType = {
  name: (typeof ProjectNames)[number];
  status: ProjectStatus;
  ifCyclical: boolean;
  hashtags: (typeof ProjectHashtags)[number][];
  shortDescription: string;
  imageSRC: string;
  alt: string;
};
