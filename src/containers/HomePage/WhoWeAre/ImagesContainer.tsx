import Image, { StaticImageData } from 'next/image';

import { Paragraph } from '@/components/Paragraph/Paragraph';

type ImageContainerProps = {
  src: StaticImageData;
  altSrc: string;
  content: string;
};

const ImagesContainer = ({ src, altSrc, content }: ImageContainerProps) => (
  <div className="flex max-w-[145px] flex-col gap-2">
    <Image src={src} alt={altSrc} height={100} width={160} />
    <Paragraph size="large" className="mt-3 text-center">
      {content}
    </Paragraph>
  </div>
);

export default ImagesContainer;
