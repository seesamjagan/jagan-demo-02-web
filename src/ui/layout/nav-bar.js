import React from "react";
import "./nav-bar.scss";
import { Icons } from "../utils";

const { About, Experience, Projects, Education, Awards } = Icons;

export default function NavBar() {
  return (
    <nav className="app-nav-bar">
      <a href="#about" to="#about">
        <About />About
      </a>
      <a href="#experience" to="#experience">
        <Experience />Experience
      </a>
      <a href="#projects" to="#projects">
        <Projects />Projects
      </a>
      <a href="#education" to="#education">
        <Education />Education
      </a>
      <a href="#awards" to="#awards">
        <Awards />Awards
      </a>
    </nav>
  );
}
