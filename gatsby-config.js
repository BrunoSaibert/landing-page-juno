module.exports = {
  siteMetadata: {
    title: `Juno New App`,
    description: `Landing page para lançamento de app fictício`,
    author: `@brunosaibert`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, {
      resolve: "gatsby-plugin-hubspot",
      options: {
        trackingCode: "6942353",
        respectDNT: true,
        productionOnly: true,
      },
    },
  ],
}
