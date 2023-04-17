import Image from 'next/image';

import ArrowGreen from '@/common/assets/icons/arrow_green.svg';
import WhiteArrowIcon from '@/common/assets/icons/arrow-white.svg';

import { Button } from '../Button';
import { MagazineGrid } from './MagazineGrid';

export const MagazineSection = () => (
  <div className="py-16 lg:bg-neutral/20">
    <div className="sm:hidden">
      <Image src="/images/format-e1/formaty.png" width={400} height={400} alt="czasopismo" className="w-full" />
      <Button kind="primary" className="mx-auto mt-8 flex items-center">
        Zobacz wszystkie
        <Image src={WhiteArrowIcon} width={16} height={16} alt="arrow" className="ml-4" />
      </Button>
    </div>
    <div className="mx-auto hidden max-w-screen-xl px-4 sm:block">
      <h2 className="mb-8">Przeczytaj Format E1</h2>
      <div className="flex">
        <div className="hidden bg-neutral/10 p-4 shadow-lg lg:block">
          <Image
            src="/images/format-e1/format-e1-czasopismo-percepcja-530x530.png"
            width={530}
            height={530}
            alt="czasopismo"
          />
          <div className="my-8 flex items-center justify-between text-2xl">
            Format E1 - &quote;Percepcja&quote;
            <div className="flex cursor-pointer items-center p-2 text-base text-2xl font-bold text-primary/60">
              Czytaj <Image src={ArrowGreen} width={15} height={15} alt="Strzałka" className="ml-1" />
            </div>
          </div>
        </div>
        <MagazineGrid />
      </div>
    </div>
    <div />
  </div>
);
