module.exports = {
  siteMetadata: {
    title: `NYU CS Resources`,
    description: `A centralized hub for NYU CS resources`,
    author: `bugsnyu@gmail.com`,
    themeColor: `8041B7`,
    siteUrl: "https://nyucs.wiki",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      rule: {
        include: /images\/svg/,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NYU CS Wiki`,
        short_name: `CS Wiki`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#8041B7`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`, // this may need to be changed
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              maintainCase: true,
              removeAccents: true,
              elements: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
            },
          },
        ],
      },
    },
    // `gatsby-redirect-from`, // allows for redirection to pages (if needed)
    // `gatsby-plugin-meta-redirect`,
    // `gatsby-plugin-catch-links`, // allows for replacement of links within mdx files
  ],
};
