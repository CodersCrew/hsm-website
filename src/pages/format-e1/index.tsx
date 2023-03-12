import { TopSection } from '@/components';
import { formatE1Image, formatE1Texts as texts } from '@/constants/format-e1';

const FormatE1Page = () => (
  <TopSection image={formatE1Image} header={texts.topSection.header} description={texts.topSection.paragraph} />
);

export default FormatE1Page;