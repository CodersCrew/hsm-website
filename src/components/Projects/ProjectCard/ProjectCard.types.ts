import { ProjectStatusVariants } from '../../StatusTag/StatusTag.types';
import { HashtagVariant } from '../Hashtag/Hashtag.types';

const projectNames = ['test1', 'Chill - Out Architecture', 'PPS', 'Arch/Box'] as const;
export type ProjectNames = (typeof projectNames)[number];

export type ProjectCardType = {
  id: number;
  name: ProjectNames;
  status: ProjectStatusVariants | null;
  ifCyclical: boolean;
  hashtags: HashtagVariant[];
  shortDescription: string;
  imageSRC: string;
  alt: string;
};
