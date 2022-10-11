import Head from "next/head";

import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";
import generateRSS from "../helpers/generateRssFeed";
import Intro from "../components/Intro";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>lucasprag</title>
      </Head>

      <Intro/>

      <h1 className="py-4 mb-3 font-semibold text-3xl border-b-2 border-gray-200 dark:border-gray-700">
        Posts
      </h1>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          slug={post.slug}
          tags={post.data.tags}
        />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = getPosts();

  await generateRSS(posts);

  return {
    props: {
      posts,
    },
  };
};
