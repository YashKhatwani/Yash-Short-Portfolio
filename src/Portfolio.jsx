import "./Portfolio.css";

function Portfolio() {
    return (
        <div className="Portfolio">
            <div className="Container">
                <div className="Introduction">
                    <h1>
                        Hi I'm{" "}
                        <span className="text-color ">Name Surname,</span>
                    </h1>
                    <br />
                    <div className="short-poem">
                        "Over the{" "}
                        <span className="emphasise-text grass-green">
                            grass
                        </span>
                        , under the{" "}
                        <span className="emphasise-text sky-blue">sky</span>, I
                        look at the{" "}
                        <span className="emphasise-text red-sun">sun</span>{" "}
                        manifesting my goals and{" "}
                        <span className="emphasise-text">
                            creating my destiny that bright."
                        </span>
                    </div>
                    <button className="btn">Resume</button>
                </div>
                <div className="About">
                    <p></p>
                    <p>
                        Currently ,I am working as software engineer involoved
                        in designing ,developing, debugging and creating
                        scalable web applications and working with technologies
                        like Reactjs, springboot, mysql, spring security .
                    </p>
                    <p>
                        Apart from this I actively spend time building projects
                        and communicating with peope around me.
                    </p>
                </div>
                <div className="Projects">
                    <h2>Projects</h2>
                    <p>
                        Here are some of the projects I have worked on recently
                    </p>
                    <ul>
                        <li>Project 1</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                        <li>Project 4</li>
                    </ul>
                </div>

                <div className="Contact">
                    <p>
                        To connect with me, you can reach out via below handles
                    </p>
                    <ul>
                        <li>linkedin</li>
                        <li>github</li>
                        <li>gmail</li>
                        <li>instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
