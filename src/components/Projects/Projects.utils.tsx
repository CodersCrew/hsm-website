import { ProjectStatus } from '../StatusTag/StatusTag.types';
import { HashtagVariant } from './Hashtag/Hashtag.types';
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
    status: 'aktywny',
    ifCyclical: true,
    hashtags: ['ekologia', 'wystawa', 'prototyp', 'wykłady', 'badania', 'sztuka', 'papier', 'budowa'],
    shortDescription: 'BWA to projekt, który powstał w obrębie Wystawy Studia Mistrzyń: Rajkowska - Nagi Nerw.',
    imageSRC: '/images/projects/project_BWA.png',
    alt: 'test1',
  },
  {
    id: 2,
    name: 'Chill - Out Architecture',
    status: 'aktywny',
    ifCyclical: false,
    hashtags: ['wystawa', 'badania', 'sztuka', 'ekologia', 'papier', 'prototyp', 'wykłady'],
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
    imageSRC: '/images/projects/project_ChillOut.png',
    alt: 'Chill - Out Architecture',
  },
  {
    id: 3,
    name: 'Inside - Out Architecture',
    status: 'archiwalny',
    ifCyclical: false,
    hashtags: ['wystawa', 'ekologia', 'papier', 'budowa'],
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ',
    imageSRC: '/images/projects/project_InsideOutArchitecture.png',
    alt: 'Inside - Out Architecture',
  },
  {
    id: 4,
    name: 'PPS',
    status: null,
    ifCyclical: true,
    hashtags: ['ekologia', 'prototyp', 'wystawa', 'wykłady', 'papier', 'budowa', 'sztuka', 'badania'],
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. ',
    imageSRC: '/images/projects/project_PPS.png',
    alt: 'PPS',
  },
  {
    id: 5,
    name: 'Arch/Box',
    status: 'archiwalny',
    ifCyclical: false,
    hashtags: ['ekologia', 'prototyp', 'wystawa', 'papier', 'budowa', 'sztuka'],
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id purus augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    imageSRC: '/images/projects/project_archbox.png',
    alt: 'Arch/Box',
  },
];

export const filterProjectsByHashtagsAndStatuses = ({
  hashtags,
  statuses,
}: {
  hashtags: HashtagVariant[];
  statuses: ProjectStatus[];
}) => {
  const filteredProjectsArray = PROJECTS_ARRAY.filter((project) => {
    const filteredHashtags = project.hashtags
      .map((projectHashtag) =>
        hashtags.find((filterHashtag) => filterHashtag === projectHashtag) ? projectHashtag : null,
      )
      .filter((item) => item !== null);

    const projectStatuses = [project.status, project.ifCyclical ? 'cykliczny' : null].filter((item) => item !== null);

    const filteredStatuses = projectStatuses
      .map((projectStatus) => statuses.find((filterStatus) => filterStatus === projectStatus))
      .filter((item) => item !== undefined);

    return (
      !!(hashtags.length > 0 ? filteredHashtags.length === hashtags.length : true) &&
      !!(statuses.length > 0 ? filteredStatuses.length === statuses.length : true)
    );
  });
  return hashtags.length > 0 || statuses.length > 0 ? filteredProjectsArray : PROJECTS_ARRAY;
};

export const filterProjectsByInput = ({ projects, input }: { projects: ProjectCardType[]; input: string }) => {
  if (!input) return projects;
  const filteredArray = projects.filter((project) => project.name.toLowerCase().includes(input.toLowerCase()));

  return filteredArray;
};

export const getProjectsOnSite = ({ array, arrayDivider }: { array: ProjectCardType[]; arrayDivider: number }) => {
  const tempArray = [];

  for (let i = 0; i < array.length; i += arrayDivider) {
    tempArray.push({
      projects: array.slice(i, i + arrayDivider),
    });
  }
  return tempArray;
};
