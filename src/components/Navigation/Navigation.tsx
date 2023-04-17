import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { BurgerMenu } from './BurgerMenu';
import { Logo } from './Logo';
import { NAV_LINKS } from './Navigation.constants';
import { NavigationLink } from './NavigationLink';

export const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleNav = () => setOpen((prevState) => !prevState);

  useEffect(() => {
    const handleRouteChange = () => setOpen(false);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <nav className="mx-auto flex w-full max-w-7xl flex-col bg-neutral/10 md:flex-row md:justify-between">
      <Logo>
        <BurgerMenu toggleNav={toggleNav} />
      </Logo>
      <ul
        className={`
          fixed top-[60px] z-10 flex h-full w-full flex-col 
          items-center space-y-4 bg-neutral/10 pt-3 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'} 
          md:static md:w-auto md:transform-none md:flex-row md:items-center 
          md:gap-x-4 md:space-y-0 md:pr-4 lg:gap-8`}
      >
        {NAV_LINKS.map((item) => {
          const { text, path } = item;

          return <NavigationLink onClick={() => setOpne(false)} text={text} path={path} key={path} />;
        })}
      </ul>
    </nav>
  );
};
