import React from 'react';

import { NavItem } from '@/components/Navbar/NavItem';

import { NAV_ITEMS_MIDDLE } from '../Footer.constants';

export const FooterNavItemsMiddle = () => (
  <ul className="text-center md:text-left">
    {NAV_ITEMS_MIDDLE.map((item) => (
      <div className="flex flex-row items-center justify-center pl-[8px] md:justify-start md:text-left" key={item.id}>
        <div className="md-max:hidden">{item.icon}</div>
        <NavItem navItemName={item.navItem} navItemSrc={item.navSrc} />
      </div>
    ))}
  </ul>
);
