import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./styles.css";

const Layout = ({ children }) => {
    const { backgroundImage } = useStaticQuery(
        graphql`
            query {
                backgroundImage: file(relativePath: { eq: "bg.jpg" }) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 2000
                            quality: 100
                            webpOptions: { quality: 100 }
                            placeholder: NONE
                        )
                    }
                }
            }
        `
    );

    const image = getImage(backgroundImage);
    const bgImage = convertToBgImage(image);

    return (
        <>
            <Header />
            <BackgroundImage
                Tag="div"
                {...bgImage}
                preserveStackingContext
                className="layout-container"
                backgroundColor={`#040e18`}
            >
                <main>{children}</main>

                <Footer />
            </BackgroundImage>
        </>
    );
};

export default Layout;
