import { MainSection, TopSection } from '@/components';
import { EditorialTeamSection, HowToContributeSection, MagazineSection, PurposeSection } from '@/components/FormatE1';
import { formatE1Image, formatE1Texts as texts } from '@/constants/format-e1';

const FormatE1Page = () => (
  <>
    <TopSection image={formatE1Image} header={texts.topSection.header} description={texts.topSection.paragraph} />
    <MainSection>
      <PurposeSection />
      <HowToContributeSection />
      <MagazineSection />
      <EditorialTeamSection />
    </MainSection>
  </>
);

export default FormatE1Page;
