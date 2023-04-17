import { PropsWithChildren } from 'react';

import { Navigation } from '@/components';
import { Footer } from '@/containers';

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);
