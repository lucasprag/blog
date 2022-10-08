import Head from "next/head";
import "highlight.js/styles/github-dark.css";
// import "highlight.js/styles/github.css";

import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";
import processMarkdown from "../helpers/processMarkdown";

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
        <span className="mx-2 text-gray-700 dark:text-gray-400">-</span>
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

  return {
    props: {
      data: post.data,
      content: await processMarkdown(post.content),
    },
  };
};
