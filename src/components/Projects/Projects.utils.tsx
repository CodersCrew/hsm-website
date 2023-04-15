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
    id: 1,
    name: 'BWA - Biuro Wspólnej aktywności',
    status: 'active',
    ifCyclical: true,
    hashtags: ['ekologia', 'wystawa', 'prototyp', 'wykłady', 'badania', 'sztuka', 'papier', 'budowa'],
    shortDescription: 'BWA to projekt, który powstał w obrębie Wystawy Studia Mistrzyń: Rajkowska - Nagi Nerw.',
    imageSRC: '/images/projects/project_BWA.png',
    alt: 'test1',
  },
  {
    id: 2,
    name: 'Chill - Out Architecture',
    status: 'active',
    ifCyclical: false,
    hashtags: ['wystawa', 'badania', 'sztuka', 'badania'],
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
    imageSRC: '/images/projects/project_ChillOut.png',
    alt: 'Chill - Out Architecture',
  },
  {
    id: 3,
    name: 'PPS',
    status: null,
    ifCyclical: true,
    hashtags: ['ekologia', 'prototyp', 'wystawa', 'wykłady', 'papier', 'budowa', 'sztuka', 'badania'],
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. ',
    imageSRC: '/images/projects/project_PPS.png',
    alt: 'PPS',
  },
  {
    id: 4,
    name: 'Arch/Box',
    status: 'archival',
    ifCyclical: false,
    hashtags: ['ekologia', 'prototyp', 'wystawa', 'papier', 'budowa', 'sztuka'],
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    imageSRC: '/images/projects/project_archbox.png',
    alt: 'Arch/Box',
  },
];

export const getProjectsOnSite = (arrayDivider: number) => {
  const tempArray = [];

  for (let i = 0; i < PROJECTS_ARRAY.length; i += arrayDivider) {
    tempArray.push({
      projects: PROJECTS_ARRAY.slice(i, i + arrayDivider),
    });
  }
  return tempArray;
};
