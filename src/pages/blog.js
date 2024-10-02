import React from "react";
import Layout from "../components/layout/Layout";

const BlogPage = () => {
    return (
        <Layout>
            <div className="blog-section">
                <h1>Blog</h1>
            </div>
        </Layout>
    );
};

export default BlogPage;

export const Head = () => <title>Adrien Poirson (#Blog)</title>;
