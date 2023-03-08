import { PropsWithChildren } from 'react';

import { Navbar } from '@/components';

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Navbar />
    {children}
  </>
);
