import React from 'react';
import { withPrefix } from 'gatsby';

import './styles.css';

const Hero = () => {

const handleDownloadResume = () => {
    window.open(withPrefix('/ResumeAdrienPoirson.pdf'), '_blank');
}

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">ADRIEN POIRSON</h1>
        <h2 className="hero-subtitle">Software Developer</h2>
        <p className="hero-text">
          Hey there! I'm a software developer with a decade of
          experience and a real passion for front-end technologies.
        </p>
        <button className="resume-button" onClick={handleDownloadResume}>Open my Resume</button>
      </div>
    </section>
  );
};

export default Hero;