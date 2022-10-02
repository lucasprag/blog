import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Link from "next/link";
import Image from "next/image";

import LightIcon from "../icons/light.svg";
import DarkIcon from "../icons/dark.svg";

import TwitterIcon from "../icons/twitter.svg";
import DevToIcon from "../icons/dev-to.svg";
import GithubIcon from "../icons/github.svg";

function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-between my-8 items-center">
      <Link href="/">
        <a className="hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded">
          <h1 className="font-medium text-xl">
            <Image
              src="/favicon.ico"
              height={15}
              width={15}
              alt="lucasprag emoji"
            />
            <span className="ml-2">lucasprag</span>
          </h1>
        </a>
      </Link>

      <div className="flex">
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

        {mounted && (
          <button
            className="px-4 pb-3 pt-3 ml-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {resolvedTheme === "dark" && (
              <DarkIcon
                className="align-middle"
                height={23}
                width={23}
                alt="click to enable dark mode"
              />
            )}
            {resolvedTheme === "light" && (
              <LightIcon
                className="align-middle"
                height={23}
                width={23}
                alt="click to enable light mode"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
