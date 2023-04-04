import { TopSection } from '@/components';
import { ImportantNumbersSection, ProjectPreviewSection, SearchBar } from '@/components/Projects';
import { projectsBannerImage, projectsTexts } from '@/components/Projects/Projects.utils';

const ProjectPage = () => (
  <div>
    <TopSection
      image={projectsBannerImage}
      header={projectsTexts.topSection.header}
      description={projectsTexts.topSection.paragraph}
    />
    <ImportantNumbersSection />
    <SearchBar />
    <ProjectPreviewSection />
  </div>
);

export default ProjectPage;
