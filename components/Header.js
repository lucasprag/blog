import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Link from "next/link";
import Image from "next/image";

import LightIcon from "../icons/light.svg";
import DarkIcon from "../icons/dark.svg";

function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-between my-8">
      <Link href="/">
        <a className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-4 py-3 rounded">
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

      <div className="flex justify-end">
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
