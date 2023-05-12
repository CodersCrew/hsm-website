import Image from 'next/image';
import Link from 'next/link';

import GreenArrowIcon from '@/common/assets/icons/arrow_green.svg';
import FacebookIcon from '@/common/assets/icons/facebook_transparent.svg';
import InstagramIcon from '@/common/assets/icons/instagram_transparent.svg';
import MailIcon from '@/common/assets/icons/mail_transparent.svg';

const ContactPage = () => (
  <section className="mx-auto max-w-7xl px-9 py-16">
    <div className="mb-16 flex justify-between">
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
      <iframe
        title="location on map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.4512134455213!2d17.056062600000004!3d51.1185847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9d1f8e9739b%3A0x48731e48c728de15!2sG%C3%B3rnickiego%2022%2C%2050-337%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1683911563195!5m2!1spl!2spl"
        width="588"
        height="325"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
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
