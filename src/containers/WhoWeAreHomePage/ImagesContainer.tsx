import Image, { StaticImageData } from 'next/image';

type ImageContainerProps = {
  src: StaticImageData;
  altSrc: string;
  content: string;
};

const ImagesContainer = ({ src, altSrc, content }: ImageContainerProps) => (
  <div className="flex max-w-[145px] flex-col">
    <Image src={src} alt={altSrc} height={100} width={160} />
    <p className="text-center">{content}</p>
  </div>
);

export default ImagesContainer;
