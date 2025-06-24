import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-container">
                <h2>Projects</h2>
                <p className="recent-projects">
                    Here are some of the projects I have worked on recently:
                </p>

                <ul className="project-grid">
                    <li className="project-item">
                        <div className="project-title">Home Mate</div>
                        <img
                            src="HomeMate.png"
                            alt="Home Mate"
                            className="project-image"
                        />
                        <p className="project-description">
                            Home Mate helps people to find roommates when they
                            move to a new city and allows users to create
                            profiles, search for potential roommates, and
                            connect with them.
                        </p>
                        <a
                            className="project-btn"
                            href="https://github.com/YashKhatwani/tsec-hacks-atmanirbhar-coders"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github link
                        </a>
                    </li>
                    <li className="project-item">
                        <div className="project-title">Coin Hunter</div>
                        <img
                            src="Coin Hunter.png"
                            alt="Home Mate"
                            className="project-image"
                        />
                        <p className="project-description">
                            Coin Hunter is a simple game where the player has to
                            collect coins while avoiding obstacles made using
                            pygame.
                        </p>
                        <a
                            className="project-btn"
                            href="https://github.com/YashKhatwani/Yash-_Coin_Hunter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github link
                        </a>
                    </li>
                    {/* <li className="project-item">
                        <div className="project-title">Pooja Toy World </div>
                        <img
                            src="Coin Hunter.png"
                            alt="Home Mate"
                            className="project-image"
                        />
                        <p className="project-description">
                            A freelence project where I created a e-commerce
                            website for a toy store.
                        </p>
                        <button className="project-btn"> Github link</button>
                    </li> */}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
