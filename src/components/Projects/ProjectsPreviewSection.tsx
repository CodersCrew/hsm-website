import Image from 'next/image';
import { useState } from 'react';

import { useProjectPageContext } from '@/context/projectPage.context';

import { Paragraph } from '../Paragraph/Paragraph';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { filterProjectsByHashtagsAndStatuses, filterProjectsByInput, getProjectsOnSite } from './Projects.utils';
import { ResultBar } from './ResultBar';

export const ProjectPreviewSection = () => {
  const { inputFilter, filterHashtags, filterStatuses } = useProjectPageContext();
  const [siteNumber, setSiteNumber] = useState<number>(0);
  const maxProjectsOnThePage = 3;

  const projectsOnForSites = getProjectsOnSite({
    array: filterProjectsByInput({
      projects: filterProjectsByHashtagsAndStatuses({ hashtags: filterHashtags, statuses: filterStatuses }),
      input: inputFilter,
    }),
    arrayDivider: maxProjectsOnThePage,
  });
  const ifProjectsExist = projectsOnForSites[siteNumber];

  return (
    <section className="z-10">
      {inputFilter.length > 0 && ifProjectsExist ? <ResultBar ifResult>{inputFilter}</ResultBar> : null}
      {ifProjectsExist ? (
        projectsOnForSites[siteNumber].projects.map((projectData, index) => (
          <ProjectCard key={projectData.name} data={{ ...projectData, index }} />
        ))
      ) : (
        <ResultBar ifResult={false}>{inputFilter}</ResultBar>
      )}
      {ifProjectsExist ? (
        <div className="flex justify-between py-8 px-8  lg:py-16 lg:px-32">
          <p className="w-20 " />
          <div className="flex justify-between gap-6 text-neutral/90">
            {projectsOnForSites.map((_siteData, siteIndex) => {
              const ifDisabledButton = siteIndex === siteNumber;
              return (
                <button
                  onClick={() => setSiteNumber(siteIndex)}
                  disabled={ifDisabledButton}
                  key={`${Math.random() * 100}`}
                >
                  {ifDisabledButton ? (
                    <Paragraph size="large" className="disabled text-[#848484]">
                      {siteIndex + 1}
                    </Paragraph>
                  ) : (
                    siteIndex + 1
                  )}
                </button>
              );
            })}
          </div>
          <Paragraph textBold="bold" className="flex gap-1 -tracking-wide text-neutral/90">
            STARSZE
            <Image
              src="/images/projects/arrow_forward_black.svg"
              width={20}
              height={20}
              alt="Look for older projects"
            />
          </Paragraph>
        </div>
      ) : null}
    </section>
  );
};
