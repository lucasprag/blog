import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight"

import getPost from "../helpers/getPost";
import getPosts from "../helpers/getPosts";


function Post({ data, content }) {
  return (
    <div>
      <h1 className="font-semibold text-3xl">{data.title}</h1>
      <time className="font-medium text-sm py-3 text-gray-400">{data.date}</time>
      <div className="post-content prose mt-5">
        <MDXRemote {...content} />
      </div>
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
  console.log('rehypeHighlight', rehypeHighlight)
  const mdxSource = await serialize(post.content,{
    mdxOptions: { rehypePlugins: [rehypeHighlight], rehypeOptions: { languages: ['elixir'] }},
  });
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
