import Link from 'next/link';

import { NavItemProps } from './NavItem.types';

export const NavItem = ({ navItemSrc, navItemName }: NavItemProps) => (
  <Link href={navItemSrc}>
    <li className="whitespace-nowrap p-2 text-base text-neutral/80">{navItemName}</li>
  </Link>
);
