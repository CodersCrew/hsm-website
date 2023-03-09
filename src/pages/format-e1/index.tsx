import Image from 'next/image';

import WhiteArrowIcon from '@/common/assets/icons/arrow-white.svg';
import FacebookIcon from '@/common/assets/icons/facebook_black.svg';
import InstagramIcon from '@/common/assets/icons/instagram_black.svg';
import MailIcon from '@/common/assets/icons/mail_black.svg';
import HomeIcon from '@/common/assets/icons/home_icon.svg';
import NumberedIcon from '@/common/assets/icons/numbered_icon.svg';

import { Button, MainSection, TopSection } from '@/components';
import { formatE1Image, formatE1Texts as texts } from '@/constants/format-e1';

// TODO:
// - ONLY MOBILE LAYOUT - IMPLEMENT DESKTOP VERSION

export default function FormatE1Page() {
  return (
    <>
      <TopSection image={formatE1Image} header={texts.topSection.header} description={texts.topSection.paragraph} />
      <MainSection className="text-neutral/90">
        <div className="my-12 px-4">
          <h2 className="mb-6">Cel czasopisma</h2>
          <div className="my-2 flex">
            <Image src={HomeIcon} width={22} height={20} alt="home icon" />
            <p className="ml-4 ">
              Naszym zadaniem jest dostarczanie wiedzy, inicjowanie dyskusji i pochylanie się nad sprawami ważnymi dla
              naszego środowiska.
            </p>
          </div>
          <div className="my-2 flex">
            <Image src={HomeIcon} width={22} height={20} alt="home icon" />
            <p className="ml-4 ">
              Pokazujemy studentom jak pisać prace naukowe, publikacje, co jest przydatną umiejętnością wykorzystywaną
              przy pracach dyplomowych.
            </p>
          </div>
          <div className="my-2 flex">
            <Image src={HomeIcon} width={22} height={20} alt="home icon" />
            <p className="ml-4 ">Promujemy działalność aktywnych studentów, publikujemy ich prace i projekty.</p>
          </div>
        </div>

        <div className="bg-neutral/20 py-8 px-4">
          <h2 className="mb-6">Jak zostać autorem?</h2>
          <p className="">
            Zarówno teksty, projekty, jak i materiały graficzne może przysłać do nas każdy student, niezależnie od tego,
            czy jest związany z Politechniką Wrocławską czy nie :)
          </p>
          <div className="mt-12">
            <div className="my-2 flex items-center justify-center">
              <Image src={NumberedIcon} width={35} height={35} alt="numbered icon" />
              <p className="ml-4">
                Wybór tematu związanego z motywem przewodnim; zgłoszenie pracy redakcji czasopisma.
              </p>
            </div>
            <div className="my-2 flex items-center justify-center">
              <Image src={NumberedIcon} width={35} height={35} alt="numbered icon" />
              <p className="ml-4">
                Po zatwierdzeniu tematu - przygotowanie i dostarczenie materiałów w określonym terminie na adres mailowy
                redakcji.
              </p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <Image src="/images/format-e1/formaty.png" width={400} height={400} alt="czasopismo" className="w-full" />
          <Button kind="primary" className="mx-auto mt-8 flex items-center">
            Zobacz wszystkie
            <Image src={WhiteArrowIcon} width={16} height={16} alt="arrow" className="ml-4" />
          </Button>
        </div>

        <div className="space-y-4 bg-neutral/20 py-8 px-4">
          <h2 className="mb-6">O nas</h2>
          <p>Format E1 jest studenckim czasopismem popularnonaukowym wydawanym od maja 2019 roku.</p>
          <p>
            Czasopismo jest przestrzenią dla wszystkich studentów, którzy swą wiedzą, pasją i zainteresowaniami chcą
            dzielić się z szerszą publicznością. Dzięki motywom przewodnim, tematyka zawarta w poszczególnych wydaniach
            jest różnorodna. Zgłębiane są zarówno dziedziny architektury i urbanistyki, jak również sztuki, budownictwa
            czy designu.
          </p>
          <p>
            Skupiamy się nie tylko na studentach z Politechniki Wrocławskiej, ale też osobach z innych uczelni wyższych
            w Polsce i zza granicy.
          </p>
        </div>

        <div className="my-16">
          <h2 className="mb-4 text-center">Zapraszamy do kontaktu</h2>
          <div className="flex justify-center space-x-12">
            <Image src={FacebookIcon} width={40} height={40} alt="facebook icon" />
            <Image src={InstagramIcon} width={40} height={40} alt="instagram icon" />
            <Image src={MailIcon} width={40} height={40} alt="mail icon" />
          </div>
        </div>

        <div className="my-8">
          <h2 className="mb-8 pl-4">Redakcja</h2>
          <div className="bg-primary/90 text-center text-neutral/20">
            <Image src="/images/format-e1/redakcja.png" width={390} height={350} alt="redakcja" className="w-screen" />
            <p className="px-2 py-4">
              Nasza Redakcja składa się ze studentów Wydziału Architektury Politechniki Wrocławskiej. Jeśli chcesz do
              nas dołączyć i współtworzyć czasopismo- napisz do nas :)
            </p>
          </div>
        </div>
      </MainSection>
    </>
  );
}
