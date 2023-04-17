import { PropsWithChildren } from 'react';

import { Footer, Navigation } from '@/components';

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);
