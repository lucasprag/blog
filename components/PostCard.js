import Link from "next/link";

function PostCard({ title, date, slug, tags }) {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <a className="flex py-1 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800">
        <div className="w-full p-2">
          <h2 className="font-semibold text-xl">{title}</h2>
          <div className="text-xs mt-1">
            <time className="text-center font-medium py-3 text-gray-700 dark:text-gray-400">
              {date}
            </time>

            <span className="mx-2 text-gray-700 dark:text-gray-400">-</span>

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
