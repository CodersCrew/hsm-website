import Image from 'next/image';
import Link from 'next/link';

import { LogoSimple } from '@/components/LogoSimple';

import { FOOTER_NAV_CONTACT_LINKS, FOOTER_NAV_LINKS } from './Footer.constants';

export const Footer = () => (
  <footer className="m-auto w-full bg-neutral/10 py-8 px-8">
    <div className="mx-auto grid max-w-sm justify-center md:max-w-screen-xl lg:grid-cols-3">
      <div className="my-12 mx-auto lg:ml-0">
        <LogoSimple />
      </div>

      <div className="text-center text-neutral/80 lg:text-left">
        <ul className="w-fit">
          {FOOTER_NAV_LINKS.map((link) => (
            <Link href={link.text} key={link.text}>
              <li className="my-1 py-2">{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="my-4 mx-auto text-center text-neutral/80 lg:ml-0">
        <ul>
          {FOOTER_NAV_CONTACT_LINKS.map((link) => (
            <Link href={link.src} key={link.text}>
              <div className="flex items-center">
                <div className="mr-3 hidden lg:block">{link.icon}</div>
                <li className="my-1 py-1">{link.text}</li>
              </div>
            </Link>
          ))}
          <div className="mt-4 flex justify-center space-x-6 lg:justify-start">
            <Link href="https://www.facebook.com/HumanizacjaSrodowiskaMiejskiego/" target="_blank">
              <Image src="/assets/facebook_gray.svg" alt="Facebook" width={25} height={25} />
            </Link>
            <Link href="https://www.instagram.com/hsm_pwr/" target="_blank">
              <Image src="/assets/instagram_gray.svg" alt="Instagram" width={25} height={25} />
            </Link>
          </div>
        </ul>
      </div>
    </div>

    <div className="mx-auto mt-10 mb-4 max-w-screen-xl text-center text-neutral/80 lg:mt-20 lg:flex lg:items-center lg:justify-between">
      <p>
        © 2022 Humanizacja Środowiska Miejskiego.{' '}
        <span className="block lg:inline-block">All rights reserved. Designed by CodersCrew</span>
      </p>
      <div className="mt-6 space-x-6 lg:mt-0">
        <Link href="/">Regulamin</Link>
        <Link href="/">Polityka prywatności</Link>
      </div>
    </div>
  </footer>
);
