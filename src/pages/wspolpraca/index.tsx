import Image from 'next/image';
import Link from 'next/link';

import { Button, TopSection } from '@/components';
import { PartnershipType, PartnershipTypeProps } from '@/components/Partnership/PartnershipType';

const partnershipTypes: PartnershipTypeProps[] = [
  {
    image: {
      src: '/images/wspolpraca/partnership-media.svg',
      alt: 'Współpraca mediowa',
    },
    partnershipType: 'medialny',
  },
  {
    image: {
      src: '/images/wspolpraca/partnership-academic.svg',
      alt: 'Współpraca naukowa',
    },
    partnershipType: 'naukowy',
  },
  {
    image: {
      src: '/images/wspolpraca/partnership-industry.svg',
      alt: 'Współpraca branżowa',
    },
    partnershipType: 'branżowy',
  },
  {
    image: {
      src: '/images/wspolpraca/partnership-commercial.svg',
      alt: 'Współpraca komercyjna',
    },
    partnershipType: 'komercyjny',
  },
];

const PartnershipPage = () => (
  <>
    <TopSection
      header="Chcesz nawiązać z nami współpracę?"
      description="Razem możemy stworzyć coś naprawdę wartościowego. Zobacz nasze poprzednie projekty i sprawdź, dlaczego warto z nami pracować :)"
      image={{
        alt: 'Współpraca w HŚM',
        src: '/images/wspolpraca/wspolpraca-1-600x500.png',
      }}
    />

    <section className="my-8 max-w-screen-xl px-4 md:mx-auto md:my-16 md:flex md:items-center lg:justify-between">
      <div className="md:max-w-lg">
        <h2>Charakter współpracy</h2>
        <p>
          Zostając partnerem Koła, możesz stać się partnerem dowolnej liczby projektów. Twoje wsparcie może być
          cykliczne lub jednorazowe.
        </p>
      </div>
      <div className="my-7 flex flex-col items-center md:mx-auto lg:grid lg:grid-cols-2 lg:gap-20 lg:px-10">
        {partnershipTypes.map((partnershipType) => (
          <PartnershipType key={partnershipType.partnershipType} {...partnershipType} />
        ))}
      </div>
    </section>

    <section className="max-w-full md:mx-auto md:my-12 lg:my-24 lg:flex lg:max-w-screen-xl lg:justify-between">
      <Image
        src="/images/wspolpraca/wspolpraca-2-590x330.png"
        height={330}
        width={590}
        alt="Współpraca w HŚM"
        className="mx-auto w-fit"
      />
      <div className="my-4 px-8">
        <h2 className="mb-6">Korzyści ze współpracy</h2>
        <ul className="list-disc space-y-3 px-6">
          <li>współpraca z zaangażowanymi studentami</li>
          <li>prototypowanie i budowa projektów</li>
          <li>wsparcie i opieka kadry naukowej Politechniki Wrocławskiej</li>
          <li>działania promocyjne</li>
        </ul>
        <Button kind="primary" type="button" className="my-6 mx-auto block md:mx-0">
          <Link href="/kontakt">Skontaktuj się</Link>
        </Button>
      </div>
    </section>

    <section className="bg-neutral/10 px-4 py-6">
      <div className="mx-auto max-w-screen-xl">
        <h2>Rekomendacje</h2>
      </div>
      <div className="py-20 text-center">REKOMENDACJE SLIDER</div>
    </section>

    <section className="px-4 py-6 md:mx-auto md:max-w-lg md:py-10 md:text-center lg:py-24">
      <h2 className="mb-6">Zainteresowany?</h2>
      <p>Jesteśmy super ludźmi, będziesz się super z nami bawić, zrobimy Ci projekt i będziesz szczęśliwy!</p>
      <Button kind="primary" type="button" className="my-6 mx-auto block">
        <Link href="/kontakt">Napisz do nas</Link>
      </Button>
    </section>

    <section className="mx-auto max-w-screen-xl px-4 py-6">
      <h2>Partnerzy</h2>
      <div className="py-20 text-center">PARTNERZY SLIDER</div>
    </section>
  </>
);

export default PartnershipPage;
