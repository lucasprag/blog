import fs from "fs";
import { Feed } from "feed";
import getPosts from "./getPosts";
import blog from "./blog";

export default function generateRssFeed(passedPosts) {
  const posts = passedPosts || getPosts();
  const siteURL = process.env.VERCEL_URL || "https://lucasprag.com";
  const date = new Date();
  const author = {
    name: "lucasprag3",
    link: "https://twitter.com/lucasprag",
  };

  const feed = new Feed({
    title: blog.name,
    description: blog.description,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/favicon.ico`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()} lucasprag`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/feed.xml`,
      json: `${siteURL}/feed.json`,
    },
    author,
  });

  posts.forEach((post) => {
    // TODO: add content

    const url = `${siteURL}/${post.slug}`;
    feed.addItem({
      title: post.data.title,
      id: url,
      link: url,
      categories: post.data.tags,
      author: [author],
      contributor: [author],
      date: new Date(post.data.date),
    });
  });

  fs.writeFileSync("./public/feed.xml", feed.rss2());
  fs.writeFileSync("./public/feed.json", feed.json1());
}