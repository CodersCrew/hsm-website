import { ProjectCardType } from './ProjectCard/ProjectCard.types';

export const projectsBannerImage = {
  src: '/images/projects/banner_projects.png',
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
    hashtags: ['ekologia', 'wystawa', 'prototyp', 'wykłady', 'badania', 'sztuka', 'badania', 'papier', 'budowa'],
    shortDescription: 'very short description ',
    imageSRC: projectsBannerImage.src,
    alt: 'test1',
  },
  {
    name: 'Chill - Out Architecture',
    status: 'active',
    ifCyclical: false,
    hashtags: ['wystawa', 'badania', 'sztuka', 'badania'],
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
    imageSRC: '/images/projects/project_ChillOut.png',
    alt: 'test2',
  },
  {
    name: 'PPS',
    status: null,
    ifCyclical: true,
    hashtags: ['ekologia', 'prototyp', 'wystawa', 'wykłady', 'papier', 'budowa', 'sztuka', 'badania'],
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. ',
    imageSRC: '/images/projects/project_PPS.png',
    alt: 'test3',
  },
];
