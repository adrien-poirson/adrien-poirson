import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import Header from '../header/Header';

import './styles.css';

const Layout = ({ children }) => {
    const { backgroundImage } = useStaticQuery(graphql`
        query {
            backgroundImage: file(relativePath: { eq: "bg.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 2000
                        quality: 100
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                    )
                }
            }
        }
    `);

    const image = getImage(backgroundImage);
    const bgImage = convertToBgImage(image);

    return (
        <BackgroundImage
            Tag="div"
            {...bgImage}
            preserveStackingContext
            className="background-container"
            backgroundColor={`#040e18`}
        >
            <Header />
            <main className="main-container">{children}</main>
        </BackgroundImage>
    );
};

export default Layout;
