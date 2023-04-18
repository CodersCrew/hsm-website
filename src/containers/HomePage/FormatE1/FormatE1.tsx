import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';

import { Button } from '@/components';
import { CarouselComponent } from '@/components/Carousel';

import FormatImage2 from '../../../../public/images/format-e1/format-e1-czasopismo-percepcja-530x530.png';
import FormatImage1 from '../../../../public/images/format-e1/format-e1-czasopismo-poczatek-180x180.png';
import FormatImage3 from '../../../../public/images/format-e1/format-e1-czasopismo-podroz-180x180.png';

const FORMATE1_CAROUSEL_DATA = [
  { id: 1, src: FormatImage1, alt: 'format' },
  { id: 2, src: FormatImage2, alt: 'format' },
  { id: 3, src: FormatImage3, alt: 'format' },
];

export const FormatE1 = () => {
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="mx-auto my-14 max-w-[1200px]">
      <div className="mx-4 grid md:grid-cols-2 lg:mx-14 xl:mx-4">
        <h2 className="self-start pb-5 text-[28px] font-semibold text-neutral/90 md:text-[36px]">Format E1</h2>
        <p className="self-start text-base leading-8 md:col-start-1 lg:pr-20 lg:text-[18px]">
          Zobacz jak powstaje nasze Czasopismo Studenckie Wydziału Architektury “Format”
        </p>
        <div className="h-[255px]  w-full md:order-1 md:col-start-2 md:row-span-2 md:row-start-1 md:row-end-4">
          <div className="mb-9 w-full">
            <CarouselComponent />
          </div>
        </div>

        <div className="mt-7 place-self-center md:place-self-start">
          <Button kind="primary">Poznaj format</Button>
        </div>
      </div>
    </section>
  );
};
