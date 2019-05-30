import React from 'react'
import { NavLink as Link  } from "react-router-dom";
import "./nav-bar.scss";

export default function NavBar() {
    return (
        <nav className="app-nav-bar">
            <Link activeClassName="active" to="/about" >About</Link>
            <Link activeClassName="active" to="/experience" >Experience</Link>
            <Link activeClassName="active" to="/projects" >Projects</Link>
            <Link activeClassName="active" to="/education" >Education</Link>
            <Link activeClassName="active" to="/awards" >Awards</Link>
        </nav>
    )
}
