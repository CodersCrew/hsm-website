import Image from 'next/image';

import PeopleInOffice from '../../common/assets/homePage/people-in-office.png';
import UndrawAbstract from '../../common/assets/homePage/undraw_abstract_re_l9xy 1.png';
import UndrawBuild from '../../common/assets/homePage/undraw_build_your__home_csh6 1.png';
import UndrawBuilding from '../../common/assets/homePage/undraw_building_blocks_re_5ahy 1.png';
import UndrawEnvironment from '../../common/assets/homePage/undraw_environment_iaus 1.png';
import UndrawUnder from '../../common/assets/homePage/undraw_under_construction_-46-pa 1.png';
import UndrawUrban from '../../common/assets/homePage/undraw_urban_design_kpu8 1.png';
import ImagesContainer from './ImagesContainer';

const imagesData = [
  { src: UndrawAbstract, altSrc: 'Abstract', content: 'prowadzimy warsztaty i prelekcje' },
  { src: UndrawBuild, altSrc: 'Build', content: 'działamy na rzecz lokalnych społeczności' },
  { src: UndrawBuilding, altSrc: 'Buildings', content: 'budujemy i prototypujemy' },
  { src: UndrawEnvironment, altSrc: 'Environment', content: 'dbamy o środowisko naturalne' },
  { src: UndrawUnder, altSrc: 'Under construction', content: 'działania społeczne' },
  { src: UndrawUrban, altSrc: 'Urban design', content: 'dbamy o środowisko miejskie' },
];

export const WhoWeAreHomePage = () => (
  <section className="mt-[94px]">
    <div className="flex">
      <div className="mx-4">
        <div>
          <h2 className="pb-5 text-[28px] font-semibold text-neutral/90">Kim jesteśmy?</h2>
          <p className="text-[18px] tracking-wide">
            Jesteśmy Kołem Naukowym działającym przy Wydziale Architektury Politechniki Wrocławskiej. Celem Koła jest
            sprowokowanie twórczej postawy w projektowaniu, badanie relacji człowiek-środowisko i korelacji
            natura-kultura. Propagujemy społeczne, zhumanizowane podejście do architektury i wszystkich dziedzin z nią
            związanych.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-between">
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
        className="hidden lg:block"
      />
    </div>
    <div>s</div>
  </section>
);
