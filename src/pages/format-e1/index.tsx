import { MainSection, TopSection } from '@/components';
import { formatE1Image, formatE1Texts as texts } from '@/constants/format-e1';
import { EditorialTeamSection, HowToContributeSection, MagazineSection, PurposeSection } from '@/components/FormatE1';

export default function FormatE1Page() {
  return (
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
}
