import Link from "next/link";

import TwitterIcon from "../icons/twitter.svg";
import DevToIcon from "../icons/dev-to.svg";
import GithubIcon from "../icons/github.svg";

function Footer() {
  return (
    <footer>
      <div className="flex justify-center">
        <Link href="https://dew.to/lucasprag">
          <a
            className="px-4 pb-3 pt-4 ml-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            target="_blank"
          >
            <DevToIcon
              className="align-middle"
              height={25}
              width={25}
              alt="my dev.to profile"
            />
          </a>
        </Link>

        <Link href="https://github.com/lucasprag">
          <a
            className="px-4 pb-3 pt-4 ml-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            target="_blank"
          >
            <GithubIcon
              className="align-middle"
              height={25}
              width={25}
              alt="my twitter profile"
            />
          </a>
        </Link>

        <Link href="https://twitter.com/lucasprag">
          <a
            className="px-4 pb-3 pt-4 ml-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            target="_blank"
          >
            <TwitterIcon
              className="align-middle"
              height={25}
              width={25}
              alt="my twitter profile"
            />
          </a>
        </Link>
      </div>

      <div className="text-center my-4 text-gray-500 text-sm">
        © 2022 lucasprag
      </div>

    </footer>
  );
}

export default Footer;