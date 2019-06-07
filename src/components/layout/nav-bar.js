import React from "react";
import "./nav-bar.scss";
import { Icon } from "../utils";

export default function NavBar() {
  return (
    <nav className="app-nav-bar">
      <a href="#about" to="#about">
        <Icon icon="user-o" />About
      </a>
      <a href="#experience" to="#experience">
        <Icon icon="puzzle-piece" />Experience
      </a>
      <a href="#projects" to="#projects">
        <Icon icon="cube" />Projects
      </a>
      <a href="#education" to="#education">
        <Icon icon="graduation-cap" />Education
      </a>
      <a href="#awards" to="#awards">
        <Icon icon="certificate" />Awards
      </a>
    </nav>
  );
}
