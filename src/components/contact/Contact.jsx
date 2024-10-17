import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import Footer from '../footer/Footer';

import './styles.css';

function encode(data) {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
}

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const { backgroundImage } = useStaticQuery(graphql`
        query {
            backgroundImage: file(relativePath: { eq: "contact.jpg" }) {
                childImageSharp {
                    gatsbyImageData(
                        width: 2000
                        quality: 100
                        placeholder: BLURRED
                        formats: [AUTO, WEBP]
                    )
                }
            }
        }
    `);

    const image = getImage(backgroundImage);
    const bgImage = convertToBgImage(image);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = encode({
            'form-name': form.getAttribute('name'),
            name,
            email,
            message,
        });

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: data,
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error));
    };

    return (
        <BackgroundImage
            Tag="div"
            {...bgImage}
            preserveStackingContext
            className="contact-background-container"
            backgroundColor={`#040e18`}
        >
            <section className="contact-section" id="contact">
                <div className="contact-container">
                    <h1>Contact</h1>

                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        className="contact-form"
                    >
                        <input type="hidden" name="form-name" value="contact" />{' '}
                        <div className="input-field-container">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field-container">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field-container">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="contact-submit-form">
                            Send Message
                        </button>
                    </form>
                </div>
                <Footer />
            </section>
        </BackgroundImage>
    );
};

export default ContactForm;
