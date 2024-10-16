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
                    >
                        Contact
                    </Link>
                </li>
                {/* <li>
                    <a href="/blog" className="nav-link">
                        Blog
                    </a>
                </li> */}
            </ul>
        </nav>
    );
};

export default Header;
