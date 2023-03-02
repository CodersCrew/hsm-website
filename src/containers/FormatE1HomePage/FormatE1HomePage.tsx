import { Button } from '@/components';

export const FormatE1HomePage = () => (
  <section className="mx-auto my-14 max-w-[1200px]">
    <div className="mx-4 grid md:grid-cols-2 lg:mx-14 xl:mx-4">
      <h2 className="self-start pb-5 text-[28px] font-semibold text-neutral/90 md:text-[36px]">Format E1</h2>
      <p className="self-start text-base leading-8 md:col-start-1 lg:pr-20 lg:text-[18px]">
        Zobacz jak powstaje nasze Czasopismo Studenckie Wydziału Architektury “Format”
      </p>
      <div className="h-[255px]  bg-[red] md:order-1 md:col-start-2 md:row-span-2 md:row-start-1 md:row-end-4">
        carosuel
      </div>
      <div className="mt-7 place-self-center md:place-self-start">
        <Button kind="primary" text="Poznaj Format" />
      </div>
    </div>
  </section>
);
