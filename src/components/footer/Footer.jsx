import React from 'react';
import GitHubContact from '../githubContact/GithubContact';

import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <span>
                &copy; {new Date().getFullYear()} Adrien Poirson. All rights
                reserved.
            </span>
            <GitHubContact username="adrien-poirson" />
        </footer>
    );
};

export default Footer;
