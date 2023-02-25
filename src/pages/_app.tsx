import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { Navbar } from '@/components';
import fontLato from '@/fonts/lato';

const App = ({ Component, pageProps }: AppProps) => (
  <main className={fontLato.className}>
    <Navbar />
    <Component {...pageProps} />
  </main>
);

export default App;
