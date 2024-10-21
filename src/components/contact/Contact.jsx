import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import BackgroundImage from 'gatsby-background-image';
import { toast } from 'react-toastify';
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
            .then(() => {
                setName('');
                setEmail('');
                setMessage('');
                toast.success('Message sent !', {
                    position: 'bottom-left',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })
            .catch((error) => {
                toast.error('Message failed, please try again later', {
                    position: 'bottom-left',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
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
                    <p>
                        I'm always open to exciting opportunities that match my
                        skills and experience. If you have a project or position
                        that you think would be a great fit, please don't
                        hesitate to get in touch. I look forward to hearing
                        about how we might work together!
                    </p>
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={handleSubmit}
                        className="contact-form"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="input-field-container">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field-container">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field-container">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                name="message"
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
