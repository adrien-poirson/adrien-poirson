import React from 'react';
import { withPrefix } from 'gatsby';

import './styles.css';

const Hero = () => {
    const handleOpenResume = () => {
        window.open(withPrefix('/ResumeAdrienPoirson.pdf'), '_blank');
    };

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="hero-title">ADRIEN POIRSON</h1>
                <h2 className="hero-subtitle">Software Developer</h2>
                <p className="hero-text">
                    Hey! I'm a software developer with a decade of experience
                    and a real passion for front-end technologies.
                </p>
                <button className="resume-button" onClick={handleOpenResume}>
                    Open my Resume
                </button>
            </div>
        </section>
    );
};

export default Hero;
