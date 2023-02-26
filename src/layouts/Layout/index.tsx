import { ReactNode } from 'react';

import { Navbar } from '@/components';
import { Footer } from '@/containers';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
