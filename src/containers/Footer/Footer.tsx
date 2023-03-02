import { FooterDesktop } from './FooterDesktop';
import { FooterMobile } from './FooterMobile';

export const Footer = () => (
  <div className="m-auto w-full max-w-7xl py-[32px]">
    <div className="md:hidden">
      <FooterMobile />
    </div>

    <div className="md-max:hidden">
      <FooterDesktop />
    </div>
  </div>
);
