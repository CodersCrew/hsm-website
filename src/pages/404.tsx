import Image from 'next/image';

import LinkButton from '@/components/LinkButton';
import { Paragraph } from '@/components/Paragraph/Paragraph';

const Custom404Page = () => (
  <section className="mx-auto flex max-w-screen-sm flex-col gap-12 px-14 pb-[122px] pt-[154px] text-center">
    <div className="flex items-center justify-center">
      <Image src="/images/404/404_image.svg" alt="Zagubiony człowiek" width={410} height={280} />
    </div>
    <div className=" flex flex-col items-center gap-4">
      <h1 className="text-primary/60 lg:text-4xl">Ups...coś poszło nie tak!</h1>
      <Paragraph>
        Możliwe, że w adresie URL jest literówka, dana zawartość już przestała już istnieć lub adres URL został
        zmieniony.
      </Paragraph>
      <LinkButton href="/" className="md:w-[378px]">
        <Paragraph>Wróć na stronę główną</Paragraph>
      </LinkButton>
    </div>
  </section>
);

export default Custom404Page;
