import Image from 'next/image';

import LinkButton from '@/components/LinkButton';

const Custom404Page = () => (
  <section className="mx-auto max-w-screen-sm px-14 text-center">
    <Image
      src="/images/404/404_image.svg"
      alt="Zagubiony człowiek"
      width={410}
      height={280}
      className="mx-auto my-10"
    />
    <h1 className="text-xl text-primary/60 md:text-2xl lg:text-4xl">Ups...coś poszło nie tak!</h1>
    <p>
      Możliwe, że w adresie URL jest literówka, dana zawartość już przestała już istnieć lub adres URL został zmieniony.
    </p>
    <LinkButton href="/" className="mt-4">
      Wróć na stronę główną
    </LinkButton>
  </section>
);

export default Custom404Page;
