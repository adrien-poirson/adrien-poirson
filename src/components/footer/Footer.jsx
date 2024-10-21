import React from 'react';
import GitHubContact from '../githubContact/GithubContact';
import LinkedInContact from '../linkedinContact/LinkedinContact';

import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <span>
                &copy; {new Date().getFullYear()} Adrien Poirson.
                <span className="all-rights-reserved">
                    All rights reserved.
                </span>
            </span>
            <div className="links">
                <GitHubContact username="adrien-poirson" />
                <LinkedInContact username="adrienpoirson" />
            </div>
        </footer>
    );
};

export default Footer;
