import React from "react";
import "./styles.css";

const About = () => {
    return (
        <section className="about" id="about">
            <h1>About me ...</h1>
            <p className="story">
                There's something magical about seeing your work come to life
                right before your eyes and knowing it's making a difference in
                how people interact with technology. That's what keeps me
                excited about client-side development every single day. I'm the
                kind of person who finds joy in well-organized code and gets a
                kick out of solving tricky problems.
            </p>

            <p className="story">
                My curiosity is always leading me down new paths of learning –
                there's always something new to discover in this field, and I
                love that! While I'm most at home in the front-end world, I've
                also got a solid grasp on backend development and database
                management. It's like being bilingual in the coding world – it
                helps me see the bigger picture and communicate better with all
                parts of a development team.
            </p>

            <p className="story">
                I've been working remotely since 2018, and I've got to say, I
                love it. It's taught me a lot about self-motivation and staying
                connected with teammates, even when we're miles apart. At the
                end of the day, what drives me is creating high-quality code
                that makes a real difference. I take ownership of my projects
                and pour my heart into making them the best they can be. If
                you're looking for someone who's passionate, dedicated, and
                always up for a new challenge, well, that's me in a nutshell!
            </p>
        </section>
    );
};

export default About;

export const Head = () => <title>Adrien Poirson</title>;
