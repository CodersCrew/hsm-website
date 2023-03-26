import { TopSection } from '@/components';
import { projectsImage, projectsTexts } from '@/constants/projects';

const ProjectPage = () => (
  <div>
    <TopSection
      image={projectsImage}
      header={projectsTexts.topSection.header}
      description={projectsTexts.topSection.paragraph}
    />
    ELo Projects
  </div>
);

export default ProjectPage;
