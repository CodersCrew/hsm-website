// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/swiper-bundle.css';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MainSection, TopSection } from '@/components';
import LinkButton from '@/components/LinkButton';
import { useWindowSize } from '@/hooks/use-window-size';

import { boardTeamImagesData } from '../../constants/o-nas';
import { aboutUsText as texts } from '../../texts/about-us';

const AboutUsPage = () => {
  const { windowWidth } = useWindowSize();

  return (
    <>
      <TopSection
        description={texts.hero.content}
        header={texts.hero.title}
        image={{ src: '/images/o-nas/team.png', alt: 'ekipa hsm' }}
      />

      <MainSection className="mx-auto max-w-screen-xl">
        <div className="mb-8 lg:mt-32 lg:flex lg:flex-row lg:px-4">
          <div className="my-5 px-4 lg:mr-12">
            <h2 className="text-neutral/100 mb-5 text-2xl font-bold">{texts.historySection.header}</h2>
            <p className="mb-8">{texts.historySection.firstParagraph}</p>
            <p>{texts.historySection.secondParagraph}</p>
          </div>
          <Image src="/images/o-nas/hala.png" width={550} height={410} alt="hala" className="mx-auto w-screen" />
        </div>
        <div className="my-5">
          <h2 className="text-neutral/100 my-5 px-4 text-2xl font-bold">{texts.boardTeamSection.header}</h2>
          <Swiper slidesPerView={windowWidth && windowWidth > 768 ? 5 : 2} spaceBetween={20} centeredSlides>
            {boardTeamImagesData.map((image) => (
              <SwiperSlide key={image.id} zoom>
                <div className="relative">
                  <Image src={image.src} width={192} height={312} alt={image.alt} />
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
      </MainSection>
    </>
  );
};

export default AboutUsPage;
