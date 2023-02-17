import { Head, Html, Main, NextScript } from 'next/document';

import fontLato from '@/fonts/lato';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className={fontLato.className}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
