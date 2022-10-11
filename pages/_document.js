import { Html, Head, Main, NextScript } from "next/document";

import blog from "../helpers/blog";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content={blog.description}
          key="desc"
        />
        <link rel="alternate" type="application/rss+xml" href={blog.feed_url} title="RSS 2.0"/>
      </Head>
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
