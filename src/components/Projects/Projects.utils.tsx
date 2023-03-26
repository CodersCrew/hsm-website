import { ProjectCardType } from './ProjectCard.types';

export const projectsImage = {
  src: '/images/projects/banner_projekty.png',
  alt: 'projekty',
};

export const projectsTexts = {
  topSection: {
    header: 'Projekty',
    paragraph:
      'Z dumą prezentujemy nasze realizacje. Za każdą z nich stoi kreatywny zespół. Najlepsze jeszcze przed nami!',
  },
};

export const PROJECTS_ARRAY: ProjectCardType[] = [
  {
    name: 'test1',
    status: 'active',
    ifCyclical: true,
    hashtags: ['ekologia', 'wystawa', 'prototyp', 'wykłady'],
    shortDescription: 'very short description ',
    imageSRC: projectsImage.src,
    alt: 'test1',
  },
  {
    name: 'test2',
    status: 'archival',
    ifCyclical: false,
    hashtags: ['wystawa', 'badania', 'sztuka', 'badania'],
    shortDescription: 'very short description ',
    imageSRC: projectsImage.src,
    alt: 'test2',
  },
  {
    name: 'test3',
    status: 'active',
    ifCyclical: true,
    hashtags: ['ekologia', 'prototyp', 'wystawa', 'wykłady'],
    shortDescription: 'very short description ',
    imageSRC: projectsImage.src,
    alt: 'test3',
  },
];
