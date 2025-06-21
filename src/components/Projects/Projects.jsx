import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <section id="projects" data-aos="fade-up">
            <div className="projects-container">
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on recently:</p>

                <ul className="project-grid">
                    <li className="project-item">
                        Project 1: Description of project 1
                    </li>
                    <li className="project-item">
                        Project 2: Description of project 2
                    </li>
                    <li className="project-item">
                        Project 3: Description of project 3
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;
