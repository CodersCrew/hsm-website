import Head from 'next/head';

import { FormatE1, Header, Partnership, Projects, WhoWeAre } from '@/containers/HomePage';
import { ProjectContextProvider } from '@/context/projectPage.context';

const Home = () => (
  <>
    <Head>
      <title>Humanizacja środowiska miejskiego</title>
      <meta name="description" content="Description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <WhoWeAre />
    <ProjectContextProvider>
      <Projects />
    </ProjectContextProvider>
    <FormatE1 />
    <Partnership />
  </>
);

export default Home;
