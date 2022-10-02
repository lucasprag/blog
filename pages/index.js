import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
    <div>
      <h1 className="py-4 mb-3 font-semibold text-3xl border-b-2 border-gray-200 dark:border-gray-700">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          slug={post.slug}
        />
      ))}
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
