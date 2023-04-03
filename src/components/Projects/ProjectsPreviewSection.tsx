import { ProjectCard } from './ProjectCard/ProjectCard';
import { PROJECTS_ARRAY } from './Projects.utils';

export const ProjectPreviewSection = () => (
  <section>
    {PROJECTS_ARRAY.map((projectData, index) => (
      <ProjectCard key={projectData.name} data={{ ...projectData, index }} />
    ))}
  </section>
);
