import React from "react";
import { Icons } from "../utils";

export default function About(props) {
  return (
    <>
      <header className="header">
        <h1 className="title">
          <Icons.About /> About
        </h1>
      </header>
      <div className="content">
        <section>
          <h2>Expertise In</h2>
          <div>UI/UX Architecture</div>
          <div>Data Structure</div>
          <div>Design Patterns </div>
          <div>Object Oriented Programming Principles</div>
          <div>Build Automation</div>
        </section>
        <section>
          <h2>Can Code In</h2>
          <div>Java Script</div>
          <div>Type Script</div>
          <div>NodeJS</div>
          <div>HTML</div>
          <div>XML</div>
        </section>
        <section>
          <h2>Worked In</h2>
          <div>ReactJS</div>
          <div>DOJO</div>
          <div>AngularJS</div>
          <div>JQuery</div>
          <div>ExpressJS</div>
        </section>
        <section>
          <h2>Tool Used</h2>
          <div>ANT</div>
          <div>NPM</div>
          <div>SVN</div>
          <div>GIT</div>
        </section>
      </div>
    </>
  );
}
