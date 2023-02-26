import Link from 'next/link';

import { LogoSimple } from '@/components/LogoSimple';
import NavItem from '@/components/Navbar/NavItem';
import { SocialMediaLinkBar } from '@/components/SocialMediaLinkBar/SocialMediaLinkBar';

import { NAV_ITEMS_MIDDLE, NAV_ITEMS_TOP } from '../Footer.constants';

export const FooterMobile = () => (
  <div className="flex flex-col items-center justify-start ">
    <div className=" mb-16">
      <LogoSimple />
    </div>

    <div>
      <ul className="text-center">
        {NAV_ITEMS_TOP.map((item) => (
          <NavItem navItem={item.navItem} navItemSrc={item.navSrc} key={item.id} />
        ))}
      </ul>

      <div className="mb-4" />

      <ul className="text-center">
        {NAV_ITEMS_MIDDLE.map((item) => (
          <NavItem navItem={item.navItem} navItemSrc={item.navSrc} key={item.id} />
        ))}
      </ul>

      <div className="mb-4" />

      <SocialMediaLinkBar />
    </div>

    <div className="mb-[24px]" />

    <div className="p-[16px] text-center text-neutral/80">
      <p className="leading-[28px]">© 2022 Humanizacja Środowiska Miejskiego.</p>
      <p className="leading-[28px]">All rights reserved. Designed by CodersCrew</p>

      <div className="mb-[24px]" />

      <div className="flex flex-row justify-center">
        <Link href="/">Regulamin</Link>

        <div className="mr-[24px]" />

        <Link href="/">Polityka prywatności</Link>
      </div>
    </div>
  </div>
);
