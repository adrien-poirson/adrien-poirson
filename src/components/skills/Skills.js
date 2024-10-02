import React from "react";
import "./styles.css";

const Skills = () => {
    const skillsets = [
        {
            category: "Languages",
            skills: ["JavaScript ES7", "TypeScript", "HTML", "CSS", "Python"],
        },
        {
            category: "Frameworks/Libraries",
            skills: [
                "React",
                "React Native",
                "Redux",
                "GraphQL",
                "styled-components",
            ],
        },
        {
            category: "Testing",
            skills: [
                "React Testing Library",
                "Playwright",
                "Cypress",
                "Jest",
                "Enzyme",
            ],
        },
        { category: "Build Tools", skills: ["Webpack", "Babel"] },
        {
            category: "Version Control & CI/CD",
            skills: ["Git", "GitHub", "Bitbucket", "Jenkins"],
        },
        { category: "Design Tools", skills: ["Figma", "InVision", "Zeplin"] },
        {
            category: "Back-End",
            skills: [
                "Node.js",
                "Python (Flask)",
                "Design and consumption of REST APIs",
            ],
        },
        {
            category: "Databases",
            skills: ["Firebase", "MongoDB", "PostgreSQL"],
        },
        {
            category: "Soft skills",
            skills: ["Communication", "Collaboration", "Problem-solving"],
        },
    ];

    return (
        <section className="skills-section" id="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                {skillsets.map((skillset, index) => (
                    <div key={index} className="skill-category">
                        <h3>{skillset.category}</h3>
                        <ul>
                            {skillset.skills.map((skill, skillIndex) => (
                                <li key={skillIndex}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
