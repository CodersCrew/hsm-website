import NavItem from '@/components/Navbar/NavItem';

import { NAV_ITEMS_TOP } from '../Footer.constants';

export const FooterNavItemsTop = () => (
  <ul className="text-center md:text-left">
    {NAV_ITEMS_TOP.map((item) => (
      <NavItem navItem={item.navItem} navItemSrc={item.navSrc} key={item.id} />
    ))}
  </ul>
);
