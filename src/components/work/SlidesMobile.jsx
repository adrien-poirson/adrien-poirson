import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Pagination, EffectCards, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './styles.css';

import 'swiper/css';
import 'swiper/css/pagination';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            gatsbyImageData(
                                width: 1000
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                            )
                        }
                    }
                }
            }
        }
    `);

    const calabrioPicture = data.allFile.edges.find(
        (img) => img.node.relativePath === 'calabrio.png'
    );

    const cumul8Picture = data.allFile.edges.find(
        (img) => img.node.relativePath === 'cumul8.png'
    );

    const discoPicture = data.allFile.edges.find(
        (img) => img.node.relativePath === 'disco-1.jpg'
    );

    const journalPicture = data.allFile.edges.find(
        (img) => img.node.relativePath === 'my-personal-journal.png'
    );

    return (
        <div className="slides-container-mobile">
            <Swiper
                modules={[Keyboard, EffectCards, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                }}
            >
                <SwiperSlide>
                    <h2>Cumul8, Vancouver, B.C</h2>
                    <p>
                        Cumul8 was a data analytics and IoT platform that
                        enabled users to unlock the power of their data.
                        <br />
                        This position was a turning point in my career. Working
                        alongside talented professionals who freely shared their
                        expertise, I experienced rapid growth in my skills and
                        understanding. It was here that the complexities of
                        front-end development truly began to click for me,
                        setting a strong foundation for my future advancements.
                        It is also where I worked on data visualizations for the
                        first time, implementing complex dashboards and
                        interactive charts with real-time data.
                    </p>
                    <p>
                        I also maintained and contributed to a library of custom
                        UI components, enhancing our team's efficiency and
                        ensuring consistency across the platform.
                        <br />
                        Furthermore, I played a key role in expanding our mobile
                        presence by porting select features to mobile devices
                        using React Native, broadening our product's
                        accessibility and user base.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    {cumul8Picture && (
                        <div className="fullpage-picture">
                            <GatsbyImage
                                image={getImage(cumul8Picture.node)}
                                alt="Cumul8"
                                style={{
                                    width: '100%',
                                    height: '80%',
                                    margin: '0px',
                                    borderRadius: '4px',
                                    border: 'solid 1px #b8c9d9',
                                }}
                            />
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://www.calabrio.com/" target="_blank">
                        Calabrio, Minneapolis, MN
                    </a>
                    <p>
                        I took a significant career leap by joining Calabrio, a
                        leading US-based provider of workforce optimization
                        solutions for contact centers. This move fulfilled a
                        long-held ambition to work for a US company. I was hired
                        as the principal front-end developer to modernize their
                        BI tool called Data Explorer. The goal was to design a
                        new solution to replace the old Java and GWT code with a
                        React front end, and achieve feature parity. My
                        responsibilities included designing the architecture and
                        selecting the libraries we would use, showcasing my
                        technical leadership skills.
                    </p>
                    <p>
                        The role quickly evolved as the project expanded. As we
                        onboarded more developers, I naturally transitioned into
                        a leadership position for several months. During this
                        time, I established coding standards, conducted code
                        reviews, and mentored team members, further developing
                        my skills in technical leadership and team management.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        My greatest challenge at Calabrio was the implementation
                        of a high-performance Pivot Table component capable of
                        handling millions of datapoints efficiently. I built
                        this component from scratch, forgoing existing libraries
                        due to our need for extensive customization. This
                        complex tool ingested a tree-like data structure and
                        dynamically rendered cells and their hierarchical
                        children, meticulously preserving intricate tree
                        relationships. Beyond its core functionality, the Pivot
                        Table boasted advanced features including:
                        <ul className="mobile-list">
                            <li>Robust search capabilities</li>
                            <li>Sophisticated filtering options</li>
                            <li>Seamless inline interactions</li>
                        </ul>
                        This project pushed the boundaries of front-end
                        performance optimization and data visualization. It
                        demanded innovative solutions to maintain responsiveness
                        and usability while processing vast datasets,
                        challenging me to balance intricate functionality with
                        smooth user experience.
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlide>
                        {calabrioPicture && (
                            <div className="fullpage-picture">
                                <GatsbyImage
                                    image={getImage(calabrioPicture.node)}
                                    alt="Calabrio"
                                    style={{
                                        width: '100%',
                                        height: '80%',
                                        margin: '0px',
                                        borderRadius: '4px',
                                        border: 'solid 1px #b8c9d9',
                                    }}
                                />
                            </div>
                        )}
                    </SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://csdisco.com/" target="_blank">
                        Disco, Austin, TX
                    </a>
                    <br />
                    <a
                        href="https://support.csdisco.com/hc/en-us/articles/9607869349261-Release-for-Nov-21-2022-Organization-Metrics"
                        target="_blank"
                    >
                        Organization Metrics Press release
                    </a>
                    <p>
                        I had the opportunity to join DISCO, an exciting company
                        that leverages AI, cloud computing, and data analytics
                        to revolutionize the practice of law. In this role, I
                        was tasked with implementing a comprehensive Reporting
                        solution from the ground up. This included designing the
                        architecture and selecting the most appropriate
                        libraries for the project.
                    </p>
                    <div>
                        This project was particularly engaging due to its
                        complex feature set, which included:
                        <ul className="mobile-list">
                            <li>Advanced filtering and sorting capabilities</li>
                            <li>
                                Search functionality with result highlighting
                            </li>
                            <li>Data export options to CSV and DOC formats</li>
                        </ul>
                    </div>
                    <p>
                        One of the key challenges was optimizing the display of
                        potentially vast amounts of data. Through careful
                        implementation of performance enhancements, we ensured
                        that the page loads and displays information swiftly,
                        maintaining a responsive and smooth user experience even
                        when handling large datasets.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fullpage-picture">
                        {discoPicture && (
                            <GatsbyImage
                                image={getImage(discoPicture.node)}
                                alt="CS Disco"
                                style={{
                                    width: '100%',
                                    height: '80%',
                                    margin: '0px',
                                    borderRadius: '4px',
                                    border: 'solid 1px #b8c9d9',
                                }}
                            />
                        )}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="http://www.my-personal-journal.com"
                        target="_blank"
                    >
                        My Personal Journal
                    </a>
                    <p>
                        My Personal Journal is a digital journaling application
                        I started developing in late summer 2024. This project
                        stems from my passion for personal growth and the power
                        of consistent self-reflection. Recognizing the need for
                        a secure, feature-rich journaling platform, I set out to
                        create a tool that not only captures daily thoughts but
                        also promotes mindfulness and personal development.
                    </p>
                    <div>
                        As of today the list of features is rather simple:
                        <ul>
                            <li>
                                Rich text editing with support for images and
                                attachments
                            </li>
                            <li>Full-text search functionality</li>
                            <li>Editing of entries</li>
                        </ul>
                    </div>
                    <p>
                        I'm planning on bringing more features soons, like data
                        encryption, mood tracking, tagging, daily prompts using
                        AI, and porting the app to mobiles.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fullpage-picture">
                        {journalPicture && (
                            <GatsbyImage
                                image={getImage(journalPicture.node)}
                                alt="My Personal Journal"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    margin: '0px',
                                    borderRadius: '4px',
                                    border: 'solid 1px #b8c9d9',
                                }}
                            />
                        )}
                    </div>
                </SwiperSlide>
                <SwiperSlide>Personal Project: Trade Seeds</SwiperSlide>
            </Swiper>
        </div>
    );
};
