import React from "react";

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </div>
    );
};

export default ProjectCard;
