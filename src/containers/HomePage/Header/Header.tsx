import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components';

import Arrow from '../../../common/assets/homePage/arrow.png';
import HeaderImage from '../../../common/assets/homePage/header.jpg';

export const Header = () => (
  <section className="relative mx-auto max-h-[961px] max-w-[1440px]">
    <Image src={HeaderImage} height={1000} width={1840} className="w-full object-cover" alt="Ludzie na spotkaniu" />
    <div className="justify-end from-black/70 via-black/20 to-black/0 px-4 md:absolute md:bottom-[0] md:flex md:h-full md:w-full md:flex-col md:bg-gradient-to-t md:text-neutral/20 lg:px-14 xl:px-[120px]">
      <h1 className="my-6 text-neutral/90 md:text-4xl md:text-neutral/20">Humanizacja Środowiska Miejskiego</h1>
      <p className="text-L_regular font-normal leading-L_regular lg:text-[18px] lg:tracking-widest">
        Koło Naukowe zostało założone w 2007 roku przez prof. Zbigniewa Bacia – opiekuna Koła i Jerzego Łątkę - studenta
        Wydziału Architektury. Celem Koła jest sprowokowanie twórczej postawy w projektowaniu, badanie relacji człowiek-
        środowisko a także korelacji natura- kultura. Istotą KN HŚM jest propagowanie społecznego, zhumanizowanego
        podejścia do architektury i wszystkich dziedzin z nią związanych.
      </p>

      <Button
        kind="primary"
        className="mx-auto mt-10 flex h-[44px] items-center rounded-20 border-none text-base md:mx-1 md:mb-12 md:self-start md:bg-neutral/20 md:font-semibold md:text-primary/90"
      >
        Dowiedz się więcej
      </Button>
      <Link href="/" className="mx-auto mb-3">
        <Image src={Arrow} width={23} height={50} alt="Strzałka do kolejnej sekcji" />
      </Link>
    </div>
  </section>
);
