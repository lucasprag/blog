import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex justify-between my-8 items-center">
      <h1 className="font-medium text-xl">Next.js Blog</h1>
      <div>
        <a
          href="https://twitter.com/MarkSShenouda"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Twitter
        </a>
        <a
          href="https://github.com/markshenouda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

        {mounted && (
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            toggle ({resolvedTheme})
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
