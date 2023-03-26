import Image from 'next/image';
import Link from 'next/link';

import ArrowBlack from '@/common/assets/icons/arrow_black.svg';
import DownwardArrow from '@/common/assets/icons/arrow_downward.svg';
import BulbIcon from '@/common/assets/icons/bulb.svg';
import GroupOfPeopleIcon from '@/common/assets/icons/group_of_people.svg';
import MagnifierIcon from '@/common/assets/icons/magnifier.svg';
import GreenUnderline from '@/common/assets/icons/underline_green.svg';
import { MainSection, TopSection } from '@/components';
import LinkButton from '@/components/LinkButton';

const joinUsCards = [
  {
    title: 'Dołącz jako Sympatyk',
    description:
      'Poznasz wiele aktywnych i twórczych osób, z którymi możesz rozwijać swoje umiejętności i pasje. Wystarczy, że przyjdziesz na nasze spotkanie! Każda osoba przychodząca na nasze ogólne zebrania staje się sympatykiem.',
    image: '/images/dolacz-do-nas/sympatyk.png',
  },
  {
    title: 'Dołącz jako Członek',
    description: 'Członkiem koła zostaje każda osoba, która aktywnie bierze udział w projektach.',
    image: '/images/dolacz-do-nas/czlonek.png',
  },
  {
    title: 'Dołącz jako Koordynator',
    description:
      'Jeśli masz pomysł na nowy projekt, który chcesz poprowadzić, możesz od razu zostać nowym koordynatorem projektu. Zbierz swój team i działaj!',
    image: '/images/dolacz-do-nas/koordynator.png',
  },
];

const JoinUsPage = () => (
  <>
    <TopSection
      header="Dołącz do HŚM"
      description="Jeśli chcesz razem z nami tworzyć projekty społeczne, badawcze, budować rzeczywiste obiekty i mieć realny wpływ na życie w mieście!"
      image={{ src: '/images/dolacz-do-nas/ekipa-hsm-600x500.png', alt: 'Ekipa HŚM' }}
    >
      <LinkButton href="/" className="relative my-8 inline-block bg-neutral/10 text-neutral/90">
        <span className="z-10">Dołącz do nas</span>
        <div className="absolute top-2 left-2 hidden h-full w-full rounded-20 border-2 border-solid border-neutral/10 md:block" />
      </LinkButton>
    </TopSection>

    <MainSection className="text-2xl">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="py-16 text-center text-4xl">Dlaczego warto?</h2>
        <div className="grid-flow-col md:grid">
          <div className="mb-14 md:mx-6">
            <Image
              src={GroupOfPeopleIcon}
              height={40}
              width={50}
              alt="group of people icon"
              className="mx-auto mb-8 md:mb-4"
            />
            <p>Poznasz wiele aktywnych i twórczych osób, z którymi możesz rozwijać swoje umiejętności i pasje</p>
          </div>
          <div className="mb-14 md:mx-6">
            <Image src={MagnifierIcon} height={45} width={45} alt="magnifier icon" className="mx-auto mb-8 md:mb-4" />
            <p>
              Będziesz mieć okazję poznać funkcjonowanie Uczelni od zupełnie innej strony :) Jeśli lubisz organizować
              wydarzenia, kontaktować się z partnerami - również znajdziesz miejsce dla siebie
            </p>
          </div>
          <div className="mb-14 md:mx-6">
            <Image src={BulbIcon} height={64} width={64} alt="bulb icon" className="mx-auto mb-8 md:mb-4" />
            <p>
              Weźmiesz udział w wielu różnorodnych projektach. To Ty decydujesz czy chcesz tworzyć projekty społeczne,
              badawcze czy prawdziwe prototypy.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-8 text-center md:my-16 md:flex md:text-left">
        <div className="MD absolute bottom-0 right-0 z-[-1] h-[60%] w-full bg-primary/20 md:h-[100%] md:w-[75%]" />
        <Image
          src="/images/dolacz-do-nas/warsztaty-350x350.png"
          height={350}
          width={350}
          alt="Warsztaty HŚM"
          className="mx-auto"
        />
        <div className="md:ml-6 md:mr-4 md:max-w-screen-sm lg:ml-16">
          <div className="my-6">
            <h2 className="mx-auto max-w-[215px] text-4xl md:mb-10 md:max-w-none">Ty wybierasz swoją rolę</h2>
            <Image src={GreenUnderline} height={10} width={170} alt="underline" className="mx-auto md:hidden" />
          </div>
          <p>
            Wkraczając w szeregi Koła możesz zostać sympatykiem, członkiem lub koordynatorem projektu. Nie prowadzimy
            rekrutacji - to Ty wybierasz swoją rolę.
          </p>
          <div className="mt-10 md:text-center">
            <p>Wybierz swoją rolę</p>
            <Link
              href="#test"
              className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-[50%] bg-primary/60 text-center text-neutral/20 shadow-lg"
            >
              <Image src={DownwardArrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl">
        {joinUsCards.map((card) => (
          <div key={card.title} className="mx-4 my-6 rounded-xl bg-neutral/10 px-4 py-8 md:mx-6 md:flex md:px-8">
            <Image src={card.image} height={160} width={160} alt="underline" className="mx-auto md:mx-4" />
            <div className="md:mx-6">
              <h2 className="">{card.title}</h2>
              <p className="my-6 text-base">{card.description}</p>
              <Link href="/" className="flex items-center text-base">
                Wypełnij zgłoszenie <Image src={ArrowBlack} alt="arrow" className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </MainSection>
  </>
);

export default JoinUsPage;
