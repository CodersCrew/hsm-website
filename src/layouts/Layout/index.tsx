import { PropsWithChildren } from 'react';

import { Footer, Navigation } from '@/components';

export const Layout = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col justify-between">
    <Navigation />
    {children}
    <Footer />
  </div>
);
