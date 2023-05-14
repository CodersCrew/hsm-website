// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/swiper-bundle.css';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MainSection, TopSection } from '@/components';
import LinkButton from '@/components/LinkButton';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import { useWindowSize } from '@/hooks/use-window-size';

import { BoardTeamArray, boardTeamImagesData } from '../../constants/o-nas';
import { aboutUsText as texts } from '../../texts/about-us';

const putCEOInTheMiddleOfArray = (array: BoardTeamArray, slidesOnView: number): BoardTeamArray => {
  const tempArray = array.slice();
  const CEOIndex = array.findIndex((member) => member.title === 'Prezes');
  tempArray.splice(CEOIndex, 1);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  slidesOnView === 5 ? tempArray.splice(2, 0, array[CEOIndex]) : tempArray.splice(0, 0, array[CEOIndex]);
  return tempArray;
};

const AboutUsPage = () => {
  const { windowWidth } = useWindowSize();
  const sliderBreakpointCondition = windowWidth && windowWidth > 768 ? 5 : 2;
  const sortedArrayBoardTeamArray = putCEOInTheMiddleOfArray(boardTeamImagesData, sliderBreakpointCondition);

  return (
    <>
      <TopSection
        description={texts.hero.content}
        header={texts.hero.title}
        image={{ src: '/images/o-nas/team.png', alt: 'ekipa hsm' }}
      />

      <MainSection className="mx-auto max-w-screen-xl">
        <div className="mb-8 lg:mt-32 lg:flex lg:flex-row lg:px-4">
          <div className="my-5 flex flex-col gap-8 px-4 lg:mr-12 ">
            <h2 className="text-neutral/100">{texts.historySection.header}</h2>
            <Paragraph size="large">{texts.historySection.firstParagraph}</Paragraph>
            <Paragraph size="large">{texts.historySection.secondParagraph}</Paragraph>
          </div>
          <Image src="/images/o-nas/hala.png" width={550} height={410} alt="hala" className="mx-auto w-screen" />
        </div>
        <div className="my-5">
          <h2 className="text-neutral/100 my-5 px-4">{texts.boardTeamSection.header}</h2>
          <Swiper
            slidesPerView={sliderBreakpointCondition}
            spaceBetween={20}
            loopedSlides={1}
            loop={!!(boardTeamImagesData.length > sliderBreakpointCondition)}
          >
            {sortedArrayBoardTeamArray.map((image) => (
              <SwiperSlide key={image.id} zoom>
                <div className="relative">
                  <Image src={image.src} width={192} height={312} alt={image.alt} />
                  <div
                    className={`absolute bottom-0 text-center font-bold text-neutral/20 ${image.background} w-full rounded-[7px] md:py-2 md:text-sm`}
                  >
                    {/* TODO: CHANGE BELOW / ADD NAVIGATION */}
                    <h6 className="uppercase">{image.title}</h6>
                    <h6 className="text-neutral/100 text-center">{image.name}</h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10 mb-24 px-4">
          <h2 className="text-neutral/100 my-5">{texts.contactSection.header}</h2>
          <div className="flex flex-col justify-center">
            <LinkButton href="https://instagram.com/hsm_pwr/" className="mx-auto">
              <Paragraph>Sprawdź nasz instagram</Paragraph>
            </LinkButton>
          </div>
        </div>
      </MainSection>
    </>
  );
};

export default AboutUsPage;
