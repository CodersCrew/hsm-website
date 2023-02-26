import Link from 'next/link';
import React from 'react';

import { LogoSimple } from '@/components/LogoSimple';
import NavItem from '@/components/Navbar/NavItem';
import { SocialMediaLinkBar } from '@/components/SocialMediaLinkBar/SocialMediaLinkBar';
import { NAV_ITEMS_MIDDLE, NAV_ITEMS_TOP } from '@/containers/Footer/Footer.constants';

export const FooterDesktop = () => (
  <div className="flex flex-row justify-center">
    <div className="grid w-full grid-cols-3">
      <LogoSimple />

      <ul className="text-left">
        {NAV_ITEMS_TOP.map((item) => (
          <NavItem navItem={item.navItem} navItemSrc={item.navSrc} key={item.id} />
        ))}
      </ul>

      <div>
        <ul className="text-left">
          {NAV_ITEMS_MIDDLE.map((item) => (
            <div className="flex flex-row items-center justify-start pl-[8px]" key={item.id}>
              {item.icon}
              <NavItem navItem={item.navItem} navItemSrc={item.navSrc} />
            </div>
          ))}
        </ul>

        <div className="mb-4" />

        <SocialMediaLinkBar />
      </div>

      <div className="col-span-2 py-[16px] pl-4 text-left text-neutral/80">
        <p className="leading-[28px]">
          © 2022 Humanizacja Środowiska Miejskiego. All rights reserved. Designed by CodersCrew
        </p>
      </div>

      <div className="flex flex-row justify-end p-[16px] text-right text-neutral/80">
        <Link href="/">Regulamin</Link>

        <div className="mr-[24px]" />

        <Link href="/">Polityka prywatności</Link>
      </div>
    </div>
  </div>
);
