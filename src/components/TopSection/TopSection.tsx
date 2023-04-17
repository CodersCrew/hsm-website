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

// TODO: Refactor TopSection
// TODO: Add everything as a children

export const TopSection: React.FC<TopSectionProps> = ({ description, header, image, children }) => (
  <section className="w-full  bg-primary/90">
    <div className="mx-auto max-w-screen-xl items-center md:flex md:flex-row-reverse">
      <Image
        src={image.src}
        height={500}
        width={500}
        alt={image.alt}
        className="mx-auto h-auto w-full md:max-w-[60%]"
      />
      <div className="mr-10 px-4 py-6 text-neutral/20 sm:py-10 md:text-lg lg:text-2xl">
        <h1>{header}</h1>
        <p className="">{description}</p>
        {children}
      </div>
    </div>
  </section>
);
