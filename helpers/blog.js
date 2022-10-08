const blog = {
  name: "lucasprag",
  description:
    "I write about Ruby, Elixir, React, indie hacking, architecture and other programming subjects.",
  url:
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : "https://lucasprag.com",
};

export default blog;
