// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/swiper-bundle.css';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import LinkButton from '@/components/LinkButton';
import { useWindowSize } from '@/hooks/use-window-size';

import { aboutUsText as texts } from '../../texts/about-us';
import { boardTeamImagesData } from './board-team.constant';

const AboutUsPage = () => {
  const { windowWidth } = useWindowSize();

  return (
    <div>
      <section className="flex-row items-center bg-primary/90 md:flex md:flex-row-reverse">
        <Image src="/images/about-us/team.png" width={700} height={500} alt="ekipa hsm" className="w-full md:w-5/12" />
        <div className="align-center relative z-10 px-4 pb-8 pt-10 text-base text-neutral/20 md:text-lg lg:pl-20 lg:pr-24 lg:text-2xl">
          <h1 className="text-neutral/100 mb-4 text-3xl font-bold lg:text-5xl">{texts.hero.title}</h1>
          <p className="leading-7">{texts.hero.content}</p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl text-base leading-7">
        <div className="my-8 lg:mt-32 lg:flex lg:flex-row lg:px-4">
          <div className="my-5 px-4 lg:mr-12">
            <h2 className="text-neutral/100 mb-5 text-2xl font-bold">{texts.historySection.header}</h2>
            <p className="mb-8">{texts.historySection.firstParagraph}</p>
            <p>{texts.historySection.secondParagraph}</p>
          </div>
          <Image src="/images/about-us/hala.png" width={550} height={410} alt="hala" className="mx-auto w-screen" />
        </div>
        <div className="my-5">
          <h2 className="text-neutral/100 my-5 px-4 text-2xl font-bold">{texts.boardTeamSection.header}</h2>
          <Swiper slidesPerView={windowWidth && windowWidth > 768 ? 5 : 2} spaceBetween={20} centeredSlides>
            {boardTeamImagesData.map((image) => (
              <SwiperSlide key={image.id} zoom>
                <div className="relative">
                  <Image src={image.src} width={192} height={312} alt={image.alt} className="h-full w-full" />
                  <div
                    className={`absolute bottom-0 text-center font-bold text-neutral/20 ${image.background} w-full rounded-[7px] md:py-2 md:text-sm`}
                  >
                    {/* TODO: CHANGE BELOW / ADD NAVIGATION */}
                    <p className="uppercase">{image.title}</p>
                    <p className="text-neutral/100 text-center">{image.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10 mb-24 px-4">
          <h2 className="text-neutral/100 my-5 text-2xl font-bold">{texts.contactSection.header}</h2>
          <div className="flex flex-col justify-center">
            <LinkButton href="https://instagram.com/hsm_pwr/" className="mx-auto">
              Sprawdź nasz instagram
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;