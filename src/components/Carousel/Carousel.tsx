// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import Carousel from 'react-multi-carousel';

import Image1 from '../../common/assets/homePage/carousel/20191011_190837 1.png';
import Image2 from '../../common/assets/homePage/carousel/280186749_5048563388571612_1542026015491318535_n 1.png';
import Image4 from '../../common/assets/homePage/carousel/DSC_0659 1.png';
import Image3 from '../../common/assets/homePage/carousel/DSC04324 (1) 1.png';
import Image5 from '../../common/assets/homePage/carousel/image1 (1) 1.png';

export const CAROUSEL_DATA = [
  { id: 1, src: Image1, alt: 'obrazek' },
  { id: 2, src: Image2, alt: 'obrazek' },
  { id: 3, src: Image3, alt: 'obrazek' },
  { id: 4, src: Image4, alt: 'obrazek' },
  { id: 5, src: Image5, alt: 'obrazek' },
];

export const CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
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
    <Carousel centerMode infinite responsive={responsive}>
      {CAROUSEL_DATA.map((item) => (
        <div className="w-full" key={item.id}>
          <Image className="h-48 w-full object-fill px-2" src={item.src} alt={item.alt} />
        </div>
      ))}
    </Carousel>
  );
};
