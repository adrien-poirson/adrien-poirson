import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './styles.css';

const About = () => {
    const isMobile = useMediaQuery({ maxWidth: '1150px' });

    const storyClassName = isMobile ? 'story-mobile' : 'story-web';

    return (
        <section className="about" id="about">
            <h1>About me</h1>
            <p className={storyClassName}>
                There's something magical about seeing your work come to life
                right before your eyes and knowing it's making a difference in
                how people interact with technology. That's what keeps me
                excited about client-side development every single day.
            </p>

            <p className={storyClassName}>
                My curiosity is always leading me down new paths of learning.
                There's always something new to discover in this field, and I
                love that! While I'm most at home in the front-end world, I've
                also got a solid grasp on backend development and databases.
            </p>

            <p className={storyClassName}>
                I've been working remotely since 2018, and I've got to say, I
                love it. It's taught me a lot about self-motivation and staying
                connected with teammates, even when we're miles apart and in
                different timezones. I take ownership of my projects and pour my
                heart into making them the best they can be.
            </p>
        </section>
    );
};

export default About;

export const Head = () => <title>Adrien Poirson</title>;
