import Head from 'next/head';

import fontLato from '@/fonts/lato';

export default function Home() {
    return (
        <>
            <Head>
                <title>Humanizajca środowiska miejskiego</title>
                <meta name="description" content="Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={fontLato.className}>
                <h1 className="text-2xl">Hello HSM!</h1>
            </main>
        </>
    );
}
