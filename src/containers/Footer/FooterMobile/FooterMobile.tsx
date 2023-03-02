import { LogoSimple } from '@/components/LogoSimple';
import { SocialMediaLinkBar } from '@/components/SocialMediaLinkBar/SocialMediaLinkBar';
import { FooterRules } from '@/containers/Footer/FooterRules';

import { FooterCopyright } from '../FooterCopyright';
import { FooterNavItemsMiddle } from '../FooterNavItemsMiddle';
import { FooterNavItemsTop } from '../FooterNavItemsTop';

export const FooterMobile = () => (
  <div className="flex flex-col items-center justify-start ">
    <div className=" mb-16">
      <LogoSimple />
    </div>

    <div>
      <FooterNavItemsTop />

      <div className="mb-4" />

      <FooterNavItemsMiddle />

      <div className="mb-4" />

      <SocialMediaLinkBar />
    </div>

    <div className="mb-[24px]" />

    <div className="p-[16px] text-center text-neutral/80">
      <FooterCopyright />

      <div className="mb-[24px]" />

      <div className="flex flex-row justify-center">
        <FooterRules />
      </div>
    </div>
  </div>
);
