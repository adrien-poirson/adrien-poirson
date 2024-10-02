import React, { useState, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useMediaQuery } from "react-responsive";

import "./styles.css";

/*
    Note !
    The navbar height has to be used in gatsby-config for gatsby-plugin-anchor-links offset
    Its value is set in :root in the root styles.css file
*/

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: "1150px" });
    const [bgColor, setBgColor] = useState("transparent");

    const listClassName = isMobile ? "nav-mobile" : "nav-web";

    useEffect(() => {
        const darkBlueColor = getComputedStyle(document.documentElement)
            .getPropertyValue("--color-dark-blue")
            .trim();
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        switch (entry.target.id) {
                            case "home":
                                setBgColor("transparent");
                                break;
                            case "skills":
                            case "about":
                            case "contact":
                                setBgColor(darkBlueColor);
                                break;
                            default:
                                setBgColor("transparent");
                        }
                    }
                });
            },
            { threshold: [1] } // Observe both when element starts to enter and when it's fully visible
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <nav className={listClassName}>
                <AnchorLink className="initials" to="/#home">
                    A.P
                </AnchorLink>

                <ul>
                    <li>
                        <AnchorLink className="nav-link" to="/#skills">
                            Skills
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="nav-link" to="/#about">
                            About
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="nav-link" to="/#projects">
                            Projects
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="nav-link" to="/#contact">
                            Contact
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="nav-link" to="/blog">
                            Blog
                        </AnchorLink>
                    </li>
                </ul>
            </nav>
            <div className="nav-bg" style={{ backgroundColor: bgColor }} />
        </>
    );
};

export default Header;
