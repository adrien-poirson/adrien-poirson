import React from "react";
import Layout from "../components/layout/Layout";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
    return (
        <Layout>
            <h1>My Projects</h1>
            {/* Map through your projects and render ProjectCard components */}
        </Layout>
    );
};

export default ProjectsPage;

export const Head = () => <title>Projects</title>;
