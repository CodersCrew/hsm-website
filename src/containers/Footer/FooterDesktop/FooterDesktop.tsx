import React from 'react';

import { LogoSimple } from '@/components/LogoSimple';
import { SocialMediaLinkBar } from '@/components/SocialMediaLinkBar/SocialMediaLinkBar';
import { FooterCopyright } from '@/containers/Footer/FooterCopyright';
import { FooterNavItemsMiddle } from '@/containers/Footer/FooterNavItemsMiddle';
import { FooterRules } from '@/containers/Footer/FooterRules';

import { FooterNavItemsTop } from '../FooterNavItemsTop';

export const FooterDesktop = () => (
  <div className="flex flex-row justify-center">
    <div className="grid w-full grid-cols-3">
      {/* the first row */}
      <LogoSimple />

      <FooterNavItemsTop />

      <div>
        <FooterNavItemsMiddle />

        <div className="mb-4" />

        <SocialMediaLinkBar />
      </div>

      {/* the second row */}
      <div className="col-span-2 py-[16px] pl-4 text-left text-neutral/80">
        <FooterCopyright />
      </div>

      <div className="flex flex-row justify-end p-[16px] text-right text-neutral/80">
        <FooterRules />
      </div>
    </div>
  </div>
);
