import Image from 'next/image';

import { Button } from '@/components';

import HeaderImage from '../../common/assets/homePage/header.jpg';
import Arrow from '../../common/assets/homePage/arrow.png';
import Link from 'next/link';

export const HeaderHomePage = () => (
  <section className="relative mx-auto max-h-[961px] max-w-[1440px]">
    <Image src={HeaderImage} width={1440} height={961} alt="Ludzie na spotkaniu" />
    <div className=" justify-end from-black/70 via-black/20 to-black/0 px-4 md:absolute md:bottom-[0] md:flex md:h-full md:w-full md:flex-col md:bg-gradient-to-t md:px-14 md:text-neutral/20 lg:px-[120px]">
      <h1 className="my-6 text-[26px] font-semibold text-neutral/90 md:text-[44px] md:text-neutral/20">
        Humanizacja Środowiska Miejskiego
      </h1>
      <p className="text-base font-normal md:text-[18px]">
        Koło Naukowe zostało złożone w 2007 roku przez prof. Zbigniewa Bacia – opiekuna Koła i Jerzego Łątkę- studenta
        Wydziału Architektury.
      </p>
      <p className="mb-12 text-base font-normal md:text-[18px]">
        Celem Koła jest sprowokowanie twórczej postawy w projektowaniu, badanie relacji człowiek- środowisko a także
        korelacji natura- kultura. Istotą KN HŚM jest propagowanie społecznego, zhumanizowanego podejścia do
        architektury i wszystkich dziedzin z nią związanych.
      </p>

      <Button
        kind="primary"
        text="Dowiedz się więcej"
        className="mx-auto flex h-[44px] items-center rounded-20 border-none text-base md:mx-1 md:mb-[68px] md:self-start md:bg-neutral/20 md:font-semibold md:text-primary/90"
      />
      <Link href="/" className="mx-auto mb-3">
        <Image src={Arrow} width={23} height={50} alt="Strzałka do kolejnej sekcji" />
      </Link>
    </div>
  </section>
);