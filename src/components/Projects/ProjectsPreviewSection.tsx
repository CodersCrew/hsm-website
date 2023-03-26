import { ProjectCard } from './ProjectCard';
import { PROJECTS_ARRAY } from './Projects.utils';

export const ProjectPreviewSection = () => (
  <section>
    PROJECT SECTION
    {PROJECTS_ARRAY.map((projectData) => (
      <ProjectCard key={projectData.name} data={projectData} />
    ))}
  </section>
);
