/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Adrien Poirson`,
        description: `A showcase of my work and skills`,
        author: `Adrien Poirson`,
        siteUrl: `http://www.adrien-poirson.dev`,
        spaceId: 'mwiutaeqiwq1',
    },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /src\/assets\/icons/,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
    ],
};
