module.exports = {
  siteMetadata: {
    title: "The Learning Project",
    description: "My digital garden, a place I share my knowledge and growth",
    url: "https://the-learning-project.netlify.app",
    image: "/favicon.ico",
    twitterUsername: "@jenkens_",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
