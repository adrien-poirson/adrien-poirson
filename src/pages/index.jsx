import React from 'react';
import { Element } from 'react-scroll';
import Layout from '../components/layout/Layout';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Work from '../components/work/Work';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Element name="about">
                <About />
            </Element>
            <Element name="skills">
                <Skills />
            </Element>
            <Element name="work">
                <Work />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            <Footer />
        </Layout>
    );
};

export default Home;

export const Head = () => <title>Adrien Poirson</title>;
