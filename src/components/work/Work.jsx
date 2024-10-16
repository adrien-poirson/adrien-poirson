import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Slides from './Slides';
import SlidesMobile from './SlidesMobile';
import './styles.css';

const Work = () => {
    const isMobile = useMediaQuery({ maxWidth: '1150px' });
    const workClasses = isMobile ? 'work-mobile' : 'work';

    return (
        <section className={workClasses} id="work">
            <div className="intro">
                <h1>Work</h1>
                <p>
                    Over the past decade, I've cultivated a robust career in the
                    software industry, specializing in front-end development
                    with a focus on React. My journey began in a small company,
                    where I laid the foundation of my skills. With each career
                    move, I've strategically advanced into roles of increasing
                    responsibility and complexity. This progression has not only
                    expanded my technical expertise but also honed my leadership
                    and problem-solving abilities, allowing me to tackle more
                    challenging projects and drive innovative solutions in the
                    ever-evolving landscape of web development.
                </p>
                <p>Here is a highlight of things I have worked on:</p>
            </div>
            {isMobile ? <SlidesMobile /> : <Slides />}
        </section>
    );
};

export default Work;

export const Head = () => <title>Adrien Poirson</title>;
