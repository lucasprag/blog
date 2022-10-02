import Link from "next/link";

function PostCard({ title, date, slug }) {
  return (
    <div className="flex py-1">
      <time className="shrink-0 text-center font-medium text-sm py-3 text-gray-400">{date}</time>

      <Link href="/[slug]" as={`/${slug}`}>
        <a className="w-full p-2 ml-5">
          <h2 className="font-semibold text-xl">{title}</h2>
        </a>
      </Link>

    </div>
  );
}

export default PostCard;
