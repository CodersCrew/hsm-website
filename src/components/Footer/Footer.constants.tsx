import Image from 'next/image';

import LocationIcon from '@/common/assets/icons/location.svg';
import MailIcon from '@/common/assets/icons/mail.svg';

export const FOOTER_NAV_LINKS = [
  { text: 'Regulamin HŚM', src: '/' },
  { text: 'Polityka plików Cookies', src: '/' },
  { text: 'Polityka prywatności', src: '/' },
  { text: 'Ochrona danych osobowych', src: '/' },
];

export const FOOTER_NAV_CONTACT_LINKS = [
  {
    text: 'Skontaktuj się z nami',
    src: '/',
    icon: <Image src={MailIcon} alt="Icon Mail" className="h-[24px] w-[24px] " />,
  },
  {
    text: 'Znajdź nas na mapie',
    src: '/',
    icon: <Image src={LocationIcon} alt="Icon Location" className="h-[24px] w-[24px]" />,
  },
];
