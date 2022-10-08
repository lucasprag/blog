import { unified } from "unified";
import markdown from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import hrehypeStringify from "rehype-stringify";
import highlight from "rehype-highlight";
import langElixir from "highlight.js/lib/languages/elixir";
import langVim from "highlight.js/lib/languages/vim";
import Head from "next/head";

import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/github.css";

const languages = {
  elixir: langElixir,
  vim: langVim,
};

import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";

function Post({ data, content }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>

      <h1 className="font-semibold text-3xl">{data.title}</h1>
      <div>
        <time className="font-medium text-sm py-3 text-gray-400">
          {data.date}
        </time>
        <span className="mx-2">-</span>
        <div className="text-xs mt-1 inline">
          {(data.tags || []).map((tag) => {
            return (
              <span key={`${data.slug}-${tag}`} className="tag mr-1">
                {tag}
              </span>
            );
          })}
        </div>
      </div>

      <div
        className="post-content prose mt-5"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);

  const processor = await unified()
    .use(markdown)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(highlight, { languages: languages })
    .use(hrehypeStringify);

  return {
    props: {
      data: post.data,
      content: String(await processor.process(post.content)),
    },
  };
};
