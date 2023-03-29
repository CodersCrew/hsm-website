import { TopSection } from '@/components';
import { ImportantNumbersSection, ProjectPreviewSection, ProjectsNavi, SearchBar } from '@/components/Projects';
import { projectsImage, projectsTexts } from '@/components/Projects/Projects.utils';

const ProjectPage = () => (
  <div>
    <TopSection
      image={projectsImage}
      header={projectsTexts.topSection.header}
      description={projectsTexts.topSection.paragraph}
    />
    <ImportantNumbersSection />
    <br />
    <SearchBar />
    <br />
    <ProjectPreviewSection />
    <br />
    <ProjectsNavi />
  </div>
);

export default ProjectPage;
