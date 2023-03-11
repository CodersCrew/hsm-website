import { useState } from 'react';

import BurgerMenuSrc from '@/common/assets/navbar/burger-menu.png';

import { BurgerMenu } from './BurgerMenu';
import { Logo } from './Logo';
import { NAV_ITEMS } from './Navbar.constants';
import { NavItem } from './NavItem';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => setOpen((prevState) => !prevState);

  const toggleClassNav = open ? 'translate-x-0' : 'translate-x-full';

  return (
    <nav className="mx-auto flex w-full max-w-7xl flex-col md:flex-row md:justify-between">
      <Logo>
        <BurgerMenu toggleNav={toggleNav} BurgerMenuSrc={BurgerMenuSrc} />
      </Logo>
      <ul
        className={`
          fixed top-[60px] z-10 flex h-full w-full flex-col 
          items-center space-y-4 bg-neutral/10 pt-3 transition-transform ${toggleClassNav} 
          md:static md:w-auto md:transform-none md:flex-row md:items-center 
          md:gap-x-4 md:space-y-0 md:pr-4 lg:gap-8`}
      >
        {NAV_ITEMS.map((item) => {
          const { navItemName, navItemSrc, id } = item;

          return <NavItem navItemName={navItemName} navItemSrc={navItemSrc} key={id} />;
        })}
      </ul>
    </nav>
  );
};
