import Image from 'next/image';
import React from 'react';

import LocationIcon from '@/common/assets/icons/location.svg';
import MailIcon from '@/common/assets/icons/mail.svg';

export const NAV_ITEMS_TOP = [
  { id: 0, navItem: 'Regulamin HŚM', navSrc: '/' },
  { id: 1, navItem: 'Polityka plików Cookies', navSrc: '/' },
  { id: 2, navItem: 'Polityka prywatności', navSrc: '/' },
  { id: 3, navItem: 'Ochrona danych osobowych', navSrc: '/' },
];

export const NAV_ITEMS_MIDDLE = [
  {
    id: 4,
    navItem: 'Skontaktuj się z nami',
    navSrc: '/',
    icon: <Image src={MailIcon} alt="Icon Mail" className="h-[24px] w-[24px] " />,
  },
  {
    id: 5,
    navItem: 'Znajdź nas na mapie',
    navSrc: '/',
    icon: <Image src={LocationIcon} alt="Icon Location" className="h-[24px] w-[24px]" />,
  },
];
