import { MainSection, TopSection } from '@/components';
import LinkButton from '@/components/LinkButton';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { ImportantNumbersSection, ProjectPreviewSection, SearchBar } from '@/components/Projects';
import { projectsBannerImage, projectsTexts } from '@/components/Projects/Projects.utils';

const ProjectPage = () => (
  <div>
    <TopSection
      image={projectsBannerImage}
      header={projectsTexts.topSection.header}
      description={projectsTexts.topSection.paragraph}
    >
      <LinkButton
        href="/"
        className="relative mt-8 w-[147px] bg-primary/20 py-2 px-6 text-neutral/90 md:flex md:justify-center"
      >
        <Paragraph className="z-10 whitespace-nowrap">Dołącz do nas</Paragraph>
        <div className="absolute top-2 left-2 hidden h-full w-full rounded-20 border-2 border-solid border-primary/20 md:block" />
      </LinkButton>
    </TopSection>
    <MainSection>
      <ImportantNumbersSection />
      <SearchBar />
      <ProjectPreviewSection />
    </MainSection>
  </div>
);

export default ProjectPage;
