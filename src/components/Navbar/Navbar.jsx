import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            setMenuOpen(false);
            
        }
    };

    return (
        <section id="navbar">
            <nav className="navbar-container">
                <div className="navbar-logo">YK</div>
                <button
                    className={`hamburger${menuOpen ? " open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
                <ul className={`navbar-links${menuOpen ? " show" : ""}`}>
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
