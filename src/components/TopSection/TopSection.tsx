import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface TopSectionProps extends PropsWithChildren {
  image: {
    src: string;
    alt: string;
  };
  header: string;
  description: string;
}

export const TopSection: React.FC<TopSectionProps> = ({ description, header, image, children }) => (
  <div className="w-full items-center bg-primary/90 md:flex md:flex-row-reverse">
    <Image src={image.src} height={500} width={500} alt={image.alt} className="w-full md:max-w-lg" />
    <div className="mr-auto px-4 pb-8 pt-10 text-neutral/20 md:text-lg lg:pl-16 lg:text-2xl">
      {/* todo: refactor top section */}
      {/* todo: add everything as a children */}
      <h1 className="mb-6 text-3xl font-bold lg:text-5xl">{header}</h1>
      <p className="">{description}</p>
      {children}
    </div>
  </div>
);
