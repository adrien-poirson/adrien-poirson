import React from 'react';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import './styles.css';

const Header = () => {
    const isMobile = useMediaQuery({ maxWidth: '1150px' });

    const listClassName = isMobile ? 'nav-mobile' : 'nav-web';

    return (
        <nav className={listClassName}>
            <Link to="home" smooth={true} duration={500} className="initials">
                A.P
            </Link>
            <ul>
                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="nav-link"
                        offset={-65}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="nav-link"
                        offset={-65}
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        to="work"
                        smooth={true}
                        duration={500}
                        className="nav-link"
                        offset={-65}
                    >
                        Work
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="nav-link"
                        offset={-65}
                    >
                        Contact
                    </Link>
                </li>
                {/* For the blog link, use a regular anchor tag as it's not an internal section */}
                <li>
                    <a href="/blog" className="nav-link">
                        Blog
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
