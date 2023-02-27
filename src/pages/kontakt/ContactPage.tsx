import Image from 'next/image';
import Link from 'next/link';

import FacebookIcon from '@/common/assets/icons/facebook_transparent.svg';
import InstagramIcon from '@/common/assets/icons/instagram_transparent.svg';
import MailIcon from '@/common/assets/icons/mail_transparent.svg';
import ArrowIcon from '@/common/assets/icons/arrow.svg';

function ContactPage() {
  return (
    <section className="mx-9">
      <div className="my-16 flex justify-between">
        <div className="space-y-2">
          <h2>Adres</h2>
          <p>ul. Łukasza Górnickiego 22</p>
          <p>50-377 Wrocław</p>
          <p>Akademik T4 "Czworak"</p>
          <p>Wejście od strony północnej, drzwi nad przedszkolem</p>
          <Link href="" className="flex w-max items-center text-primary/60 lg:hidden">
            Zobacz na mapie <Image src={ArrowIcon} height={15} width={15} alt="arrow icon" className="my-4 ml-2" />
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
          <Link href="">
            <Image src={MailIcon} height={24} width={24} alt="email icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
