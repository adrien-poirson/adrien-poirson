import React from "react";
import Layout from "../components/layout/Layout";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Me</h1>
            <ContactForm />
        </Layout>
    );
};

export default ContactPage;

export const Head = () => <title>Contact</title>;
