import { unified } from "unified";
import markdown from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import hrehypeStringify from "rehype-stringify";
import highlight from "rehype-highlight";
import langElixir from "highlight.js/lib/languages/elixir";
import langVim from "highlight.js/lib/languages/vim";

const languages = {
  elixir: langElixir,
  vim: langVim,
};

const processMarkdown = async (content) => {
  const processor = await unified()
    .use(markdown)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(highlight, { languages: languages })
    .use(hrehypeStringify);

  return String(await processor.process(content))
};

export default processMarkdown;
