import { PropsWithChildren } from 'react';

import { Navigation } from '@/components';

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Navigation />
    {children}
  </>
);
