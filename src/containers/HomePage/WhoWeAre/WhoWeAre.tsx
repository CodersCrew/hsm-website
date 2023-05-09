import Image from 'next/image';

import PeopleInOffice from '../../../common/assets/homePage/people-in-office.png';
import Quotes from '../../../common/assets/homePage/quotes.png';
import UndrawAbstract from '../../../common/assets/homePage/undraw_abstract_re_l9xy 1.png';
import UndrawBuild from '../../../common/assets/homePage/undraw_build_your__home_csh6 1.png';
import UndrawBuilding from '../../../common/assets/homePage/undraw_building_blocks_re_5ahy 1.png';
import UndrawEnvironment from '../../../common/assets/homePage/undraw_environment_iaus 1.png';
import UndrawUnder from '../../../common/assets/homePage/undraw_under_construction_-46-pa 1.png';
import UndrawUrban from '../../../common/assets/homePage/undraw_urban_design_kpu8 1.png';
import ImagesContainer from './ImagesContainer';

const imagesData = [
  { src: UndrawUrban, altSrc: 'Urban design', content: 'dbamy o środowisko miejskie' },
  { src: UndrawEnvironment, altSrc: 'Environment', content: 'dbamy o środowisko naturalne' },
  { src: UndrawBuilding, altSrc: 'Buildings', content: 'budujemy i prototypujemy' },
  { src: UndrawAbstract, altSrc: 'Abstract', content: 'prowadzimy warsztaty i prelekcje' },
  { src: UndrawUnder, altSrc: 'Under construction', content: 'działania społeczne' },
  { src: UndrawBuild, altSrc: 'Build', content: 'działamy na rzecz lokalnych społeczności' },
];

export const WhoWeAre = () => (
  <section className="mx-auto mt-[94px] xl:max-w-[1200px]  ">
    <div className="mx-4 flex lg:mx-14 xl:mx-0">
      <div className="lg:pr-16 xl:pr-32">
        <div>
          <h2 className="pb-5 text-[36px] text-neutral/90">Kim jesteśmy?</h2>
          <p className="text-L_regular font-normal leading-L_regular tracking-wide ">
            Jesteśmy Kołem Naukowym działającym przy Wydziale Architektury Politechniki Wrocławskiej. Celem Koła jest
            sprowokowanie twórczej postawy w projektowaniu, badanie relacji człowiek-środowisko i korelacji
            natura-kultura. Propagujemy społeczne, zhumanizowane podejście do architektury i wszystkich dziedzin z nią
            związanych.
          </p>
        </div>

        <div className=" mt-12 flex flex-wrap justify-center gap-y-12 gap-x-14 px-1 sm:justify-evenly md:max-w-xl">
          {imagesData.map((image) => (
            <ImagesContainer key={image.altSrc} src={image.src} altSrc={image.altSrc} content={image.content} />
          ))}
        </div>
      </div>
      <Image
        src={PeopleInOffice}
        alt="Ludzie pracujący w biurze"
        height={648}
        width={395}
        className="hidden object-cover lg:block"
      />
    </div>
    <div className="relative mt-16 flex flex-col px-4 lg:mx-14 lg:mt-32 xl:mx-0">
      <Image
        src={Quotes}
        width={81}
        height={54}
        alt="quotes"
        className="absolute -top-6 left-6 opacity-30  grayscale lg:left-8 lg:-top-5 lg:grayscale-0"
      />

      <h2 className=" tracking-widest lg:text-4xl">
        “Głównym błędem w projektowaniu jest brak zrozumienia i chęci, żeby poznać i przyswoić nowe idee. Drugą
        przeszkodą jest niechęć społeczna do robienia czegoś inaczej. Często społeczność nie aprobuje nowych projektów.
        Trzeba się przebijać przez swego rodzaju mur: krytyki, niechęci, niepewności”
      </h2>
      <h4 className="mt-10 self-end ">prof. dr inż. arch. Zbigniew Bać</h4>
      <Image
        src={Quotes}
        width={81}
        height={54}
        alt="quotes"
        className="absolute -bottom-9 right-9 rotate-180 opacity-30 grayscale lg:grayscale-0"
      />
    </div>
  </section>
);
