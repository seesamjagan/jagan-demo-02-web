import React from 'react'
import { NavLink as a  } from "react-router-dom";
import "./nav-bar.scss";

export default function NavBar() {
    return (
        <nav className="app-nav-bar">
            <a activeClassName="active" href="#about" to="#about" >About</a>
            <a activeClassName="active" href="#experience" to="#experience" >Experience</a>
            <a activeClassName="active" href="#projects" to="#projects" >Projects</a>
            <a activeClassName="active" href="#education" to="#education" >Education</a>
            <a activeClassName="active" href="#awards" to="#awards" >Awards</a>
        </nav>
    )
}
