import "./About.css";

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <h2>About Me</h2>
                <div className="about-grid">
                    <div className="experience">
                        <h3>Experience</h3>
                        <ul>
                            <li>
                                Software Engineer at Deutsche Bank(2023 -
                                Present)
                            </li>
                            <li>2 years</li>
                        </ul>
                    </div>
                    <div className="education">
                        <h3>Education</h3>
                        <ul>
                            <li>BTech in Computer Science</li>
                            <li>Mumbai Unieversity(2019 - 2023)</li>
                        </ul>
                    </div>
                </div>
                <div className="about-text">
                    <p>
                        Currently I am working as a full stack developer
                        involved in creating Restful APIs in spring boot and and
                        integrating them with Reactjs frontend to build scalable
                        web applications.
                    </p>
                    <p>
                        Familier with agile methodologies to build software
                        application to achieve efficeiency and scalability.
                    </p>
                    <p>
                        I love practicing yog and meditation 🧘‍♂️ daily healing my
                        mind, body and soul .I also enjoy playing outdoor sports
                        like cricket 🏏and badminton 🏸.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
