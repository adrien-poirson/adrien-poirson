import React from 'react';
import './styles.css';

const Skills = () => {
    const skillsets = [
        {
            category: 'Languages',
            skills: ['JavaScript ES7', 'TypeScript', 'HTML', 'CSS', 'Python'],
        },
        {
            category: 'Frameworks/Libraries',
            skills: [
                'React',
                'React Native',
                'Redux',
                'GraphQL',
                'styled-components',
                'NextJS',
                'Gatsby',
                'and many more...',
            ],
        },
        {
            category: 'Testing',
            skills: [
                'React Testing Library',
                'Playwright',
                'Cypress',
                'Jest',
                'Enzyme',
            ],
        },
        { category: 'Build Tools', skills: ['Webpack', 'Babel'] },
        {
            category: 'VCS & CI/CD',
            skills: ['Git', 'GitHub', 'GitHub Actions', 'Bitbucket', 'Jenkins'],
        },
        { category: 'Design Tools', skills: ['Figma', 'InVision', 'Zeplin'] },
        {
            category: 'Back-End',
            skills: ['Node.js', 'Python (Flask)', 'REST APIs'],
        },
        {
            category: 'Databases',
            skills: ['Firebase', 'MongoDB', 'PostgreSQL'],
        },
    ];

    return (
        <section className="skills-section" id="skills">
            <h1>Blending Skills, Technology, and Innovation</h1>
            <div className="skills-section-container">
                <h2>Soft skills</h2>
                <p>
                    While technical skills are crucial, I believe soft skills
                    are the true differentiator in our field. My focus on
                    effective communication, adaptability, and collaborative
                    problem-solving has consistently enhanced team dynamics and
                    project outcomes. In the evolving landscape of remote work,
                    these interpersonal abilities have proven invaluable,
                    enabling seamless cooperation across diverse teams and
                    driving innovative solutions. It's this combination of
                    technical expertise and refined soft skills that I strive to
                    bring to every project, aiming to elevate not just my own
                    work, but the entire team's performance.
                </p>
                <h2>About AI</h2>
                <p>
                    I harness AI tools to boost productivity in software
                    development, streamlining routine tasks and accelerating
                    problem-solving. However, I view AI as a complement to my
                    skills, not a replacement; it enhances my workflow while I
                    rely on my experience and creativity to craft innovative,
                    tailored solutions for each project. At the moment I am
                    using Cursor IDE and Claude 3.5 Sonnet model. I have also
                    experimented with ChatGPT and GitHub Copilot.
                </p>
                <h2>Technical skills</h2>
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
            </div>
        </section>
    );
};

export default Skills;
