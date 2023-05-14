import { Button } from '@/components';
import { Paragraph } from '@/components/Paragraph/Paragraph';

export const FormatE1 = () => (
  <section className="mx-auto my-14 max-w-[1200px]">
    <div className="mx-4 grid md:grid-cols-2 lg:mx-14 xl:mx-4">
      <h2 className="self-start pb-5 text-neutral/90">Format E1</h2>
      <Paragraph size="large" className="self-start md:col-start-1 lg:pr-20 ">
        Zobacz jak powstaje nasze Czasopismo Studenckie Wydziału Architektury “Format”
      </Paragraph>
      <div className="h-[255px]  bg-[red] md:order-1 md:col-start-2 md:row-span-2 md:row-start-1 md:row-end-4">
        carosuel
      </div>
      <div className="mt-7 place-self-center md:place-self-start">
        <Button kind="primary">
          {' '}
          <Paragraph size="regular">Poznaj format</Paragraph>
        </Button>
      </div>
    </div>
  </section>
);
