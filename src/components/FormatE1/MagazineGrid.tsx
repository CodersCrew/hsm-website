import Image from 'next/image';

import ArrowGreen from '@/common/assets/icons/arrow_green.svg';
import ArrowBlack from '@/common/assets/icons/arrow_black.svg';

const magazines = [
  {
    src: '/images/format-e1/format-e1-czasopismo-zmiana-180x180.png',
    alt: 'Format E1 - czasopismo zmiana',
    name: 'Zmiana',
  },
  {
    src: '/images/format-e1/format-e1-czasopismo-podroz-180x180.png',
    alt: 'Format E1 - czasopismo podróż',
    name: 'Podróż',
  },
  {
    src: '/images/format-e1/format-e1-czasopismo-roznorodnosc-180x180.png',
    alt: 'Format E1 - czasopismo różnorodność',
    name: 'Różnorodność',
  },
  {
    src: '/images/format-e1/format-e1-czasopismo-poczatek-180x180.png',
    alt: 'Format E1 - czasopismo początek',
    name: 'Początek',
  },
];

// TODO: Change photos / add div with padding / refactor

export const MagazineGrid = () => {
  return (
    <div className="mx-auto my-auto">
      <div className="grid grid-cols-2 place-items-center gap-16">
        {magazines.map((magazine, idx) => (
          <div className="w-[180px]  bg-neutral/10 shadow-lg" key={idx}>
            <Image src={magazine.src} width={180} height={180} alt={magazine.alt} />
            <div className="flex p-2 text-sm">
              <p>Format E1 - {magazine.name}</p>
              <div className="flex cursor-pointer items-center p-2 text-base font-bold text-primary/60">
                Czytaj <Image src={ArrowGreen} width={15} height={15} alt="Strzałka" className="ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 hidden justify-end text-2xl lg:flex">
        <span className="flex cursor-pointer">
          Zobacz wszystkie <Image src={ArrowBlack} width={20} height={20} alt="Strzałka" className="ml-1" />
        </span>
      </div>
    </div>
  );
};
