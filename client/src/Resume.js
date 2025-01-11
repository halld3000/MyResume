import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
                <h1>James Kirk</h1>
                <p>2233 Enterprise Way, Riverside Iowa, 2263 | (123) 456-7890 | james.t.kirk@starfleet.gov</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                <h3>Masters of Science in Galactic Exploration</h3>
                <p>Starfleet Academy, San Fransico, CA 12345 | May 2255</p>
                <p>GPA: 4.0</p>
                <h3>Bachelor of Foreign Relations</h3>
                <p>Starfleet Academy, San Fransico, CA 12345 | May 2253</p>
                <p>GPA: 4.0</p>
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