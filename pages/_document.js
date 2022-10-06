import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="I write about Ruby, Elixir, React, indie hacking, architecture and other programming subjects."
          key="desc"
        />
      </Head>
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
