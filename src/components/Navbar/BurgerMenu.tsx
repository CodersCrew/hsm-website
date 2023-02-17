import Image, { StaticImageData } from 'next/image';

type BurgerMenuProps = {
  toggleNav: () => void;
  BurgerMenuSrc: StaticImageData | string;
};

const BurgerMenu = ({ toggleNav, BurgerMenuSrc }: BurgerMenuProps) => (
  <div onClick={toggleNav} onKeyUp={toggleNav} role="button" tabIndex={0} className="mr-5 p-4">
    <Image
      src={BurgerMenuSrc}
      width={150}
      height={100}
      alt="Ikona menu burger"
      className="h-[10px] w-[15px] md:hidden"
    />
  </div>
);

export default BurgerMenu;
