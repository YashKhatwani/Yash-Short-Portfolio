import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faGithub,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    return (
        <section id="home" data-aos="fade-up">
            <div className="home-container">
                <div className="home-top-container">
                    <div className="left-side">
                        <img
                            src="Yash_whitbg.png"
                            alt="Profile"
                            className="profile-image"
                        />

                        <button className="btn">Resume</button>
                    </div>
                    <div className="right-side">
                        <div className="home-content">
                            <div className="home-title">
                                <div className="above-home-title">Hi, I'm</div>{" "}
                                <div className="home-title-text sky-blue">
                                    Yash Khatwani
                                </div>
                                <div className="designate-text">
                                    <i>a Software Engineer</i>
                                </div>
                                .
                            </div>
                            <br />
                            <div className="short-poem">
                                <i>
                                    "Over the{" "}
                                    <span className="emphasise-text grass-green">
                                        grass
                                    </span>
                                    , under the{" "}
                                    <span className="emphasise-text sky-blue">
                                        sky
                                    </span>
                                    , I look at the{" "}
                                    <span className="emphasise-text red-sun">
                                        sun
                                    </span>{" "}
                                    manifesting my goals and{" "}
                                    <span className="emphasise-text">
                                        creating my destiny that bright.
                                    </span>
                                </i>
                                "
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-bottom-container">
                    <div className="social-links">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=yashkhatwani2002@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Gmail"
                        >
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a
                            href="https://github.com/YashKhatwani"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yash-khatwani-47b5851b3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://www.instagram.com/yash_04k/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
