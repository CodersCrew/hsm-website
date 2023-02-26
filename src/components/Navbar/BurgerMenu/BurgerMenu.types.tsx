import { StaticImageData } from 'next/image';

export type BurgerMenuProps = {
  toggleNav: () => void;
  BurgerMenuSrc: StaticImageData | string;
};
