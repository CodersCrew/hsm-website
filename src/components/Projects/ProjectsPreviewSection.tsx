import Image from 'next/image';
import { useState } from 'react';

import { useProjectPageContext } from '@/context/projectPage.context';

import { ProjectCard } from './ProjectCard/ProjectCard';
import { getProjectsOnSite, PROJECTS_ARRAY } from './Projects.utils';

export const ProjectPreviewSection = () => {
  const { filterHashtags, filterStatuses } = useProjectPageContext();
  const [siteNumber, setSiteNumber] = useState<number>(0);
  const maxProjectsOnThePage = 3;
  const filteredProjectsArray = PROJECTS_ARRAY.filter(
    (project) =>
      !!project.hashtags.find((projectHashtag) =>
        filterHashtags.find((filterHashtag) => filterHashtag === projectHashtag),
      ),
  );
  const projectsOnForSites = getProjectsOnSite({
    array: filteredProjectsArray.length > 0 ? filteredProjectsArray : PROJECTS_ARRAY,
    arrayDivider: maxProjectsOnThePage,
  });

  console.log(filteredProjectsArray);

  return (
    <section className="z-10">
      {projectsOnForSites[siteNumber].projects.map((projectData, index) => (
        <ProjectCard key={projectData.name} data={{ ...projectData, index }} />
      ))}
      <div className="flex justify-between py-16 px-32">
        <p />
        <div className="flex justify-between gap-6 text-neutral/90">
          {projectsOnForSites.map((_siteData, siteIndex) => {
            const ifDisabledButton = siteIndex === siteNumber;
            return (
              <button
                onClick={() => setSiteNumber(siteIndex)}
                disabled={ifDisabledButton}
                key={`${Math.random() * 100}`}
              >
                {ifDisabledButton ? <p>{siteIndex + 1}</p> : siteIndex + 1}
              </button>
            );
          })}
        </div>{' '}
        <p className="flex gap-1 font-bold leading-M_regular -tracking-wide text-neutral/90">
          STARSZE{' '}
          <Image src="/images/projects/arrow_forward_black.svg" width={20} height={20} alt="Look for older projects" />
        </p>
      </div>
    </section>
  );
};
