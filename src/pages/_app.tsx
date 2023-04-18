import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import { ProjectContextProvider } from '@/context/projectPage.context';
import fontLato from '@/fonts/lato';
import { Layout } from '@/layouts';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <main className={fontLato.className}>
      <ProjectContextProvider>
        <Component {...pageProps} />
      </ProjectContextProvider>
    </main>
  </Layout>
);

export default App;
