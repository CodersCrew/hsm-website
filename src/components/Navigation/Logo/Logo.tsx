/* eslint-disable arrow-body-style */
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const Logo = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-between py-2 pl-4">
      <Link href="/">
        <div className="flex">
          <Image
            src="/assets/hsm-logo.png"
            width={100}
            height={100}
            alt="Logo humanizacja środowiska miejskiego"
            className="h-[48px] w-[48px]"
          />
          <div className="pl-3">
            <p className="text-xs font-bold first-letter:text-secondary/60">humanizacja</p>
            <p className="text-xs font-bold first-letter:text-secondary/60">środowiska</p>
            <p className="text-xs font-bold first-letter:text-secondary/60">miejskiego</p>
          </div>
        </div>
      </Link>

      {children}
    </div>
  );
};
