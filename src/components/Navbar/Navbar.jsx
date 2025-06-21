import React from "react";
import "./Navbar.css";

const Navbar = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="navbar">
            <nav className="navbar-container">
                <div className="navbar-logo">YK</div>
                <ul className="navbar-links">
                    <li>
                        <button
                            className="nav-item"
                            onClick={() => scrollToSection("home")}
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            className="nav-item"
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <button
                            className="nav-item"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projects
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;
