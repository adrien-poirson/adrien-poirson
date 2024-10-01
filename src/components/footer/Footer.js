import React from "react";
import GitHubContact from "../githubContact/GithubContact";

import "./styles.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Adrien Poirson. All rights
                reserved.
            </p>
            <GitHubContact username="adrien-poirson" />
        </footer>
    );
};

export default Footer;
