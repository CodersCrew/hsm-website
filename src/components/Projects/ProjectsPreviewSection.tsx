import Image from 'next/image';
import { useState } from 'react';

import { useProjectPageContext } from '@/context/projectPage.context';

import { NoResultPage } from './NoResultPage';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { filterProjectsByHashtagsAndStatuses, getProjectsOnSite } from './Projects.utils';

export const ProjectPreviewSection = () => {
  const { filterHashtags, filterStatuses } = useProjectPageContext();
  const [siteNumber, setSiteNumber] = useState<number>(0);
  const maxProjectsOnThePage = 3;

  const projectsOnForSites = getProjectsOnSite({
    array: filterProjectsByHashtagsAndStatuses({ hashtags: filterHashtags, statuses: filterStatuses }),
    arrayDivider: maxProjectsOnThePage,
  });
  const ifProjectsExist = projectsOnForSites[siteNumber];
  return (
    <section className="z-10">
      {ifProjectsExist ? (
        projectsOnForSites[siteNumber].projects.map((projectData, index) => (
          <ProjectCard key={projectData.name} data={{ ...projectData, index }} />
        ))
      ) : (
        <NoResultPage>Set Input Value</NoResultPage>
      )}
      {ifProjectsExist ? (
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
            <Image
              src="/images/projects/arrow_forward_black.svg"
              width={20}
              height={20}
              alt="Look for older projects"
            />
          </p>
        </div>
      ) : null}
    </section>
  );
};
