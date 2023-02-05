import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Humanizajca środowiska miejskiego</title>
                <meta name="description" content="Description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="text-2xl">Hello HSM!</h1>
            </main>
        </>
    );
}
