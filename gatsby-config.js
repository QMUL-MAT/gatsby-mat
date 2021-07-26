/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config()

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: "gatsby-source-git",
      options: {
        name: "orcid-publications",
        remote: "https://github.com/QMUL-MAT/orcid-publications.git",
        branch: "gh-pages",
        patterns: "*.bib",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1440,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 100,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-twitter",
      options: {
        credentials: {
          consumer_key: process.env.TWITTER_API_KEY,
          consumer_secret: process.env.TWITTER_API_SECRET,
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          timeline: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "QMUL_MAT",
              include_rts: true,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
      },
    },
    "gatsby-plugin-catch-links"
  ],
}
