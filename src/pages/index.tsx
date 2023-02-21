import Head from 'next/head';

import { HeaderHomePage, WhoWeAreHomePage } from '@/containers';

const Home = () => (
  <>
    <Head>
      <title>Humanizacja środowiska miejskiego</title>
      <meta name="description" content="Description" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head> 
      <HeaderHomePage />
      <WhoWeAreHomePage />  
  </>
);

export default Home;
