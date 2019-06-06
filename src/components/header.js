import React from "react";
import "./header.scss";
import NavBar from "./nav-bar";

export default function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <a href="/" className="profile-picture" />
        <h2 className="name">Jagan Langa</h2>
        <h2 className="title">Technical Architect</h2>
      </header>
      <NavBar />
    </React.Fragment>
  );
}
