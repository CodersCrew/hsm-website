import { Head, Html, Main, NextScript } from 'next/document';

import fontLato from '@/fonts/lato';

const Document = () => (
  <Html lang="en">
    <Head />
    <body className={fontLato.className}>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
