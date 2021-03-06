module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/src/images/team`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hackathon`,
        path: `${__dirname}/src/images/hackathon`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `misc`,
        path: `${__dirname}/src/images/misc`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icons/ETHGlobal.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`muli\:400,700`],
      },
    },
  ],
};
