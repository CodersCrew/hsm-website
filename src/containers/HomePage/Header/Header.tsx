import Image from 'next/image';

import { Button } from '@/components';
import { Paragraph } from '@/components/Paragraph/Paragraph';

import Arrow from '../../../common/assets/homePage/arrow.png';
import HeaderImage from '../../../common/assets/homePage/header.jpg';

export const Header = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('whoWeAre');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative mx-auto max-h-[961px] max-w-[1440px]">
      <Image src={HeaderImage} height={1000} width={1840} className="w-full object-cover" alt="Ludzie na spotkaniu" />
      <div className="justify-end from-black/70 via-black/20 to-black/0 px-4 md:absolute md:bottom-[0] md:flex md:h-full md:w-full md:flex-col md:bg-gradient-to-t md:text-neutral/20 lg:px-14 xl:px-[120px]">
        <h1 className="my-6 text-neutral/90 md:text-neutral/20">Humanizacja Środowiska Miejskiego</h1>
        <Paragraph size="large" className=" lg:tracking-widest">
          Koło Naukowe zostało założone w 2007 roku przez prof. Zbigniewa Bacia – opiekuna Koła i Jerzego Łątkę -
          studenta Wydziału Architektury. Celem Koła jest sprowokowanie twórczej postawy w projektowaniu, badanie
          relacji człowiek- środowisko a także korelacji natura- kultura. Istotą KN HŚM jest propagowanie społecznego,
          zhumanizowanego podejścia do architektury i wszystkich dziedzin z nią związanych.
        </Paragraph>

        <Button
          kind="primary"
          className="mx-auto mt-10 flex h-[44px] items-center rounded-20 border-none md:mx-1 md:mb-12 md:self-start md:bg-neutral/20  "
        >
          <Paragraph textBold="semibold" className="md:text-primary/90">
            Dowiedz się więcej
          </Paragraph>
        </Button>
        <button className="mx-auto mb-3 animate-pulse" onClick={handleClickScroll}>
          <Image src={Arrow} width={23} height={50} alt="Strzałka do kolejnej sekcji" />
        </button>
      </div>
    </section>
  );
};
