import { TopSection } from '@/components';
import { ImportantNumbersSection, ProjectPreviewSection, SearchBar } from '@/components/Projects';
import { projectsImage, projectsTexts } from '@/components/Projects/Projects.utils';

const ProjectPage = () => (
  <div>
    <TopSection
      image={projectsImage}
      header={projectsTexts.topSection.header}
      description={projectsTexts.topSection.paragraph}
    />
    ELo Projects
    <br />
    <ImportantNumbersSection />
    <br />
    <SearchBar />
    <br />
    <ProjectPreviewSection />
  </div>
);

export default ProjectPage;
