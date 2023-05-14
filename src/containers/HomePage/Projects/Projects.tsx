import { Button } from '@/components';
import { Paragraph } from '@/components/Paragraph/Paragraph';

export const Projects = () => (
  <section className="mx-auto mt-14 max-w-[1200px]">
    <div className="mx-4 flex flex-col items-center justify-center lg:mx-14 xl:mx-4">
      <h2 className="self-start pb-5  text-neutral/90 ">Projekty</h2>
      <div>carousel</div>

      <Button kind="primary" className="">
        <Paragraph size="regular">Zobacz więcej</Paragraph>
      </Button>
    </div>
  </section>
);
