module.exports = {
  siteMetadata: {
    title: "The Learning Project",
    description: "My digital garden, a place I share my learnings and growth",
    url: "https://the-learning-project.netlify.app",
    image: "/favicon.ico",
    twitterUsername: "@jenkens_",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-gitinfo`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Learning Project",
        short_name: "The Learning Project",
        description: "The Learning Project",
        start_url: "/",
        background_color: "#5cdb95",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "static/favicon.ico",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
