import { MainSection, TopSection } from '@/components';
import { ImportantNumbersSection, ProjectPreviewSection, SearchBar } from '@/components/Projects';
import { projectsBannerImage, projectsTexts } from '@/components/Projects/Projects.utils';

const ProjectPage = () => (
  <div>
    <TopSection
      image={projectsBannerImage}
      header={projectsTexts.topSection.header}
      description={projectsTexts.topSection.paragraph}
    />
    <MainSection>
      <ImportantNumbersSection />
      <SearchBar />
      <ProjectPreviewSection />
    </MainSection>
  </div>
);

export default ProjectPage;
