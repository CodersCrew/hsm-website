import Image from 'next/image';

import FacebookIcon from '@/common/assets/icons/facebook_black.svg';
import InstagramIcon from '@/common/assets/icons/instagram_black.svg';
import MailIcon from '@/common/assets/icons/mail_black.svg';

export const EditorialTeamSection = () => (
  <div className="md:bg-neutral/20">
    <div className="mx-auto max-w-screen-xl items-center md:flex">
      <div className="bg-neutral/20 py-8 px-4">
        <div className="space-y-4 md:max-w-2xl lg:space-y-8">
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

        <div className="my-16 md:my-12 lg:mt-24">
          <p className="mb-4 text-center text-xl md:text-left lg:text-2xl">Zapraszamy do kontaktu</p>
          <div className="flex justify-center space-x-12 md:justify-start">
            <Image src={FacebookIcon} width={40} height={40} alt="facebook icon" />
            <Image src={InstagramIcon} width={40} height={40} alt="instagram icon" />
            <Image src={MailIcon} width={40} height={40} alt="mail icon" />
          </div>
        </div>
      </div>

      <div className="my-8">
        <h2 className="mb-8 pl-4 md:hidden">Redakcja</h2>
        <div className="bg-primary/90 text-center text-neutral/20 md:relative md:ml-4 md:bg-neutral/10">
          <Image
            src="/images/format-e1/redakcja-390x350.png"
            width={390}
            height={350}
            alt="redakcja"
            className="w-screen md:hidden"
          />
          <Image
            src="/images/format-e1/redakcja-700x790.png"
            width={700}
            height={790}
            alt="redakcja"
            className="hidden md:block"
          />
          <p className="bottom-0 px-2 py-4 md:absolute md:bg-neutral/90 md:bg-opacity-80 md:py-4 md:px-4 lg:py-8 lg:px-8">
            Nasza Redakcja składa się ze studentów Wydziału Architektury Politechniki Wrocławskiej. Jeśli chcesz do nas
            dołączyć i współtworzyć czasopismo- napisz do nas :)
          </p>
        </div>
      </div>
    </div>
  </div>
);
