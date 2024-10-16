import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import Footer from '../footer/Footer';

import './styles.css';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [honeypot, setHoneypot] = useState('');

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

        if (honeypot?.length > 0) {
            // Probably a bot
            return;
        }

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Form successfully submitted');
                    // Reset form fields
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
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
                        onSubmit={handleSubmit}
                        className="contact-form"
                    >
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
                        <input
                            type="text"
                            name="honeypot"
                            id="honeypot"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                            style={{ display: 'none' }}
                            tabIndex="-1"
                            autoComplete="off"
                        />
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
