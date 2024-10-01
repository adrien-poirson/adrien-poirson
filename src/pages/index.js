import React from "react";
import Layout from "../components/layout/Layout";

const Home = () => {
    return (
        <Layout>
            <div
                style={{
                    borderRadius: "8px",
                    padding: "16px",
                    color: "#c3C3c3",
                    width: "60%",
                    background: "rgba(0,0,0, 0.75)",
                }}
            >
                <h1>ADRIEN POIRSON</h1>
                <h2>Software Developer</h2>
                <p>
                    Hey there! I'm a software developer with a decade of
                    experience and a real passion for front-end technologies.
                    There's something magical about seeing your work come to
                    life right before your eyes and knowing it's making a
                    difference in how people interact with technology. That's
                    what keeps me excited about client-side development every
                    single day. I'm the kind of person who finds joy in
                    well-organized code and gets a kick out of solving tricky
                    problems. My curiosity is always leading me down new paths
                    of learning – there's always something new to discover in
                    this field, and I love that! While I'm most at home in the
                    front-end world, I've also got a solid grasp on backend
                    development and database management. It's like being
                    bilingual in the coding world – it helps me see the bigger
                    picture and communicate better with all parts of a
                    development team. I've been working remotely since 2018, and
                    I've got to say, I love it. It's taught me a lot about
                    self-motivation and staying connected with teammates, even
                    when we're miles apart. At the end of the day, what drives
                    me is creating high-quality code that makes a real
                    difference. I take ownership of my projects and pour my
                    heart into making them the best they can be. If you're
                    looking for someone who's passionate, dedicated, and always
                    up for a new challenge, well, that's me in a nutshell!
                </p>
            </div>
        </Layout>
    );
};

export default Home;

export const Head = () => <title>Home</title>;
