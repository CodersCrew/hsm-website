import Link from 'next/link';

type NavItemsProps = {
  navItemSrc: string;
  navItem: string;
};

const NavItem = ({ navItemSrc, navItem }: NavItemsProps) => (
  <Link href={navItemSrc}>
    <li className="whitespace-nowrap p-2 text-base text-neutral/80">{navItem}</li>
  </Link>
);

export default NavItem;
