import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Skills />
            <About />
            <Contact />
        </Layout>
    );
};

export default Home;

export const Head = () => <title>Adrien Poirson</title>;
