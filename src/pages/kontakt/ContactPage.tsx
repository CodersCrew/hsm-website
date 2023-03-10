import Image from 'next/image';
import Link from 'next/link';

import GreenArrowIcon from '@/common/assets/icons/arrow_green.svg';
import FacebookIcon from '@/common/assets/icons/facebook_transparent.svg';
import InstagramIcon from '@/common/assets/icons/instagram_transparent.svg';
import MailIcon from '@/common/assets/icons/mail_transparent.svg';

const ContactPage = () => (
  <section className="mx-auto max-w-7xl px-9">
    <div className="my-16 flex justify-between">
      <div className="space-y-2">
        <h2>Adres</h2>
        <p>ul. Łukasza Górnickiego 22</p>
        <p>50-377 Wrocław</p>
        <p>Akademik T4 &quot;Czworak&quot;</p>
        <p>Wejście od strony północnej, drzwi nad przedszkolem</p>
        <Link href="/" className="flex w-max items-center text-primary/60 lg:hidden">
          Zobacz na mapie <Image src={GreenArrowIcon} height={15} width={15} alt="arrow icon" className="my-4 ml-2" />
        </Link>
      </div>
      <Image src="/images/kontakt/mapa.png" height={325} width={588} alt="map" className="hidden lg:block" />
    </div>
    <div>
      <h3 className="my-4 text-2xl lg:text-primary/60">Zapraszamy do kontaktu</h3>
      <div className="flex space-x-10">
        <Link href="https://www.facebook.com/HumanizacjaSrodowiskaMiejskiego/" target="_blank">
          <Image src={FacebookIcon} height={24} width={24} alt="facebook icon" />
        </Link>
        <Link href="https://www.instagram.com/hsm_pwr/" target="_blank">
          <Image src={InstagramIcon} height={24} width={24} alt="instagram icon" />
        </Link>
        {/* TODO: Add proper email */}
        <Link href="/">
          <Image src={MailIcon} height={24} width={24} alt="email icon" />
        </Link>
      </div>
    </div>
  </section>
);

export default ContactPage;
