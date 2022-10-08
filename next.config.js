/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: "/posts/how-to-provide-configs-to-react-on-phoenix-and-esbuild",
        destination:
          "/2022-02-18-how-to-provide-configs-to-react-on-phoenix-and-esbuild",
        permanent: true,
      },
      {
        source: "/posts/fish-the-shell",
        destination: "/2020-06-22-fish-the-shell",
        permanent: true,
      },
      {
        source: "/posts/expanding-rails-sti-to-your-architecture",
        destination: "/2020-06-22-expanding-rails-sti-to-your-architecture",
        permanent: true,
      },
      {
        source: "/posts/a-year-of-ruby-meetups-in-kitchener",
        destination: "/2019-12-22-a-year-of-ruby-meetups-in-kitchener",
        permanent: true,
      },
      {
        source: "/posts/command-line-programs-i-use-in-a-day-to-day-basis",
        destination:
          "/2019-07-25-command-line-programs-i-use-in-a-day-to-day-basis",
        permanent: true,
      },
      {
        source:
          "/posts/trick-to-use-ctags-to-jump-to-definition-even-inside-ruby-gems",
        destination:
          "/2019-11-06-use-ctags-to-jump-to-definition-even-inside-ruby-gems",
        permanent: true,
      },
      {
        source: "/posts/how-to-reload-your-vim-configs-without-exiting-vim",
        destination:
          "/2019-07-26-how-to-reload-your-vim-configs-without-exiting-vim",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
