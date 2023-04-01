import { ProjectStatusVariants } from '../StatusTag/StatusTag.types';

const projectNames = ['test1', 'test2', 'test3'] as const;
export type ProjectNames = (typeof projectNames)[number];

const projectHashtags = [
  'ekologia',
  'wystawa',
  'papier',
  'budowa',
  'prototyp',
  'sztuka',
  'wykłady',
  'badania',
] as const;
export type ProjectHashtags = (typeof projectHashtags)[number];

export type ProjectCardType = {
  name: ProjectNames;
  status: ProjectStatusVariants;
  ifCyclical: boolean;
  hashtags: ProjectHashtags[];
  shortDescription: string;
  imageSRC: string;
  alt: string;
};
