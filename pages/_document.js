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
      </Head>
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
