import Image from 'next/image';
import React from 'react';

import FacebookLogo from '@/common/assets/icons/facebook.svg';
import InstagramLogo from '@/common/assets/icons/instagram.svg';

export const SocialMediaLinkBar = () => (
  <div className="flex flex-row justify-center p-[8px] md:justify-start">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#">
      <Image src={FacebookLogo} alt="Logo Facebook" className="h-[24px] w-[24px]" />
    </a>

    <div className="mr-[16px]" />

    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a href="#">
      <Image src={InstagramLogo} alt="Logo Instagram" className="h-[24px] w-[24px]" />
    </a>
  </div>
);
