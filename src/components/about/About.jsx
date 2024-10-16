import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';

import LightIcon from '../../assets/icons/light-bulb.svg';

import './styles.css';

const About = () => {
    const { backgroundImage } = useStaticQuery(graphql`
        query {
            backgroundImage: file(relativePath: { eq: "programming.jpg" }) {
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

    const isMobile = useMediaQuery({ maxWidth: '1150px' });

    const storyClassName = isMobile ? 'story-mobile' : 'story-web';

    return (
        <BackgroundImage
            Tag="div"
            {...bgImage}
            preserveStackingContext
            className="about-background-container"
            backgroundColor={`#040e18`}
        >
            <section className="about" id="about">
                <h1>About me</h1>
                <div className="story-container">
                    <div className="story-with-icon">
                        <p className={storyClassName}>
                            <q>
                                There's something magical about seeing your work
                                come to life right before your eyes and knowing
                                it's making a difference in how people interact
                                with technology. That's what keeps me excited
                                about client-side development every single day.
                            </q>
                        </p>
                    </div>

                    <div className="story-with-icon">
                        {!isMobile && <LightIcon width={120} height={120} />}
                        <p className={storyClassName}>
                            <q>
                                My curiosity is always leading me down new paths
                                of learning. There's always something new to
                                discover in this field, and I love that! While
                                I'm most at home in the front-end world, I've
                                also got a solid grasp on backend development
                                and databases.
                            </q>
                        </p>
                    </div>

                    <div className="story-with-icon">
                        <p className={storyClassName}>
                            <q>
                                I've been working remotely since 2018, and I've
                                got to say, I love it. It's taught me a lot
                                about self-motivation and staying connected with
                                teammates, even when we're miles apart and in
                                different timezones. I take ownership of my
                                projects and pour my heart into making them the
                                best they can be.
                            </q>
                        </p>
                    </div>
                </div>
            </section>
        </BackgroundImage>
    );
};

export default About;

export const Head = () => <title>Adrien Poirson</title>;
