import Link from "next/link";

function PostCard({ title, date, slug, tags }) {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <a className="flex py-1 px-5 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
        <time className="w-28 text-center font-medium text-sm py-3 text-gray-700 dark:text-gray-400">
          {date}
        </time>

        <div className="w-full ml-5 p-2">
          <h2 className="font-semibold text-xl">{title}</h2>
          <div className="text-xs mt-1">
            {(tags || []).map((tag) => {
              return (
                <span key={`${slug}-${tag}`} className="tag mr-1">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
