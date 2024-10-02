/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Adrien Poirson`,
        description: `A showcase of my work and skills`,
        author: `Adrien Poirson`,
        siteUrl: `https://www.yourdomain.tld`,
        spaceId: "mwiutaeqiwq1",
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -65,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `static`,
                path: `${__dirname}/static`,
            },
        },
    ],
};
