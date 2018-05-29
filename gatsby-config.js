module.exports = {
  siteMetadata: {
    title: "recursivechaos home",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "markdown-pages",
      },
    },
  ],
};
