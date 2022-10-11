import fs from "fs";
import { Feed } from "feed";
import getPosts from "./getPosts";
import blog from "./blog";
import processMarkdown from "../helpers/processMarkdown";

export default async function generateRssFeed(passedPosts) {
  const siteURL = blog.url;
  const date = new Date();
  const author = {
    name: "lucasprag",
    link: "https://twitter.com/lucasprag",
  };

  const feed = new Feed({
    title: blog.name,
    description: blog.description,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `Blog under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons</a>`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/feed.xml`,
      json: `${siteURL}/feed.json`,
    },
    author,
  });

  const posts = passedPosts || getPosts();
  const renderedPosts = await Promise.all(
    posts.map(async (post) => {
      return { slug: post.slug, content: await processMarkdown(post.content) };
    })
  );

  posts.forEach((post) => {
    const url = `${siteURL}/${post.slug}`;
    const content = renderedPosts.find((p) => p.slug == post.slug).content;

    feed.addItem({
      title: post.data.title,
      id: url,
      link: url,
      categories: post.data.tags,
      author: [author],
      contributor: [author],
      date: new Date(post.data.date),
      description: post.data.description,
      content: content,
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.rss2());
  fs.writeFileSync("./public/feed.json", feed.json1());
}
