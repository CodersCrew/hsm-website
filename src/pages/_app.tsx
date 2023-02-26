import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import fontLato from '@/fonts/lato';
import { Layout } from '@/layouts';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <main className={fontLato.className}>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default App;
