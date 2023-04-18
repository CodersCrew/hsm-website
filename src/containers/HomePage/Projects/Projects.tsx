

import { Button } from '@/components';
import { CarouselComponent } from '@/components/Carousel';

export const Projects = () => (
  <section className="mx-auto mt-14 max-w-[1200px]">
    <div className="mx-4 flex flex-col items-center justify-center lg:mx-14 xl:mx-4">
      <h2 className="self-start pb-5 text-[28px] font-semibold text-neutral/90 md:text-[36px] ">Projekty</h2>
      <div className="mb-9 w-full">
        <CarouselComponent />
      </div>

      <Button kind="primary" className="">
        Zobacz więcej
      </Button>
    </div>
  </section>
);
