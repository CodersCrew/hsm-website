import { useEffect, useState } from 'react';

import BurgerMenuSrc from '../../common/assets/navbar/burger-menu.png';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';
import NavItem from './NavItem';

const NavItems = [
  { id: 0, navItem: 'O nas', navSrc: '/about' },
  { id: 1, navItem: 'Projekty', navSrc: '/projects' },
  { id: 2, navItem: 'Format E1', navSrc: '/formate1' },
  { id: 3, navItem: 'Współpraca', navSrc: '/partnership' },
  { id: 4, navItem: 'Dołącz do nas', navSrc: '/connect' },
  { id: 5, navItem: 'Kontakt', navSrc: '/contact' },
  { id: 6, navItem: 'PL', navSrc: '/language' },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNav = () => setOpen((prevState) => !prevState);

  const toggleClassNav = open ? 'translate-x-0' : 'translate-x-full';

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
  }, [open]);

  return (
    <nav className="sticky top-0 z-10 w-full bg-neutral/10 pb-2">
      <div className='flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto'>
        <Logo>
        <BurgerMenu toggleNav={toggleNav} BurgerMenuSrc={BurgerMenuSrc} />
      </Logo>
      <ul
        className={`fixed top-[56px] z-10 flex h-full w-full flex-col items-center space-y-4 bg-neutral/10 pt-3 transition-transform ${toggleClassNav} text-[16px] md:static  md:h-[56px] md:w-auto md:transform-none md:flex-row md:items-center md:gap-x-4 md:space-y-0 md:pr-4 lg:gap-8`}
      >
        {NavItems.map((item) => (
          <NavItem navItem={item.navItem} navItemSrc={item.navSrc} key={item.id} />
        ))}
      </ul>
      </div>
      
    </nav>
  );
};
