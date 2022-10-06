import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/github-dark.min.css"
        />
      </Head>
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
