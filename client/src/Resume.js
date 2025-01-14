import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>Daniel Hall</h1>
                <p>2233 Enterprise Way, Puyallup, WA 2263 | (425) 273-2506 |</p> 
                <p>halld3000@gmail.com</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                <h3>Masters of Science in Galactic Exploration</h3>
                <p>Starfleet Academy, San francisco, CA 12345 | May 2255</p>
                <p>GPA: 4.0</p>
                <h3>Bachelor of Foreign Relations</h3>
                <p>Starfleet Academy, San francisco, CA 12345 | May 2253</p>
                <p>GPA: 4.0</p>
                </div>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <div className="skills">
                    <p>Pilot: Galaxy-class, Intrepid-class, Class J starship</p>
                    <p>Command: first cadet to beat the Kobayashi Maru</p>
                </div>    
            </section>
            
            <section className="section">
                <h2>Work Experience</h2>
                <div className="experiences">
                    <p>Commander U.S.S Enterprise</p>
                    <p>Lieutenant U.S.S. Farragut</p>
                    <p>Ensign U.S.S Republic</p>
                </div>    
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Personal Website</h3>
                    <p>
                        The Adventures of a Starfleet Captin
                    </p>
                    <p>
                        Source code:{""}
                        <a
                          href="https://github.com/halld3000/personal-website"
                          target="blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/halld3000/personal-website
                        </a>  
                    </p>

                    <h3>Online Bookstore</h3>
                    <p>
                        All your Book needs
                    </p>
                    <p>
                        Source code:{""}
                        <a
                          href="https://github.com/halld3000/online-bookstore"
                          target="_blank"
                          rel="nooperner noreferrer"
                         >
                          https://github.com/halld3000/online-bookstore
                         </a>
                    </p>
                </div>
            </section>
        </div>   
        );
};

export default Resume;