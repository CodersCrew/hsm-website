import Image from 'next/image';
import Link from 'next/link';

import HSMLogo from '@/common/assets/navbar/hsm-logo.png';

export const LogoSimple = () => (
  <div className="flex h-[56px] justify-between py-2 pl-4">
    <Link href="/">
      <div className="flex">
        <Image
          src={HSMLogo}
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
  </div>
);
