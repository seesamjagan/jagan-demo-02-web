import React, { Component, Fragment, useEffect, useState } from "react";
import { NavLink as Link, Route } from "react-router-dom";
import "./jagan.scss";
import About from "../routes/about";
import Experience from "../routes/experience";
import Projects from "../routes/projects";
import Educations from "../routes/education";
import Awards from "../routes/awards";
import { Icon } from "../utils";
import Portfolio from "../routes/portfolio";

const NavBar = () => (
  <div className="nav-bar">
    <Link to="/" exact>
      <div>👦</div>
      <div>About</div>
    </Link>
    <Link to="/experience">
      <div>👷🏻</div>
      <div>Experience</div>
    </Link>
    <Link to="/education">
      <div>👨🏽‍🎓</div>
      <div>Education</div>
    </Link>
    {/*
    <Link to="/portfolio">
      <div>🎨</div>
      <div>Portfolio</div>
    </Link>
    <Link to="/awards">
      <div>🏆</div>
      <div>Awards</div>
    </Link>
    */}
  </div>
);

const subTitles = ["SCM", "UI Architect", "Freelance"];
const Header = () => (
  <Fragment>
    <header className="title">Jagan Langa</header>
    <header className="sub-title">{subTitles.join(" 🌼 ")}</header>
  </Fragment>
);

const SocialMedia = () => (
  <section className="social-media">
    -
    <a href="https://linkedin.com/in/seesamjagan/" className="icon">
      <Icon icon="linkedin" />
    </a>
    -
    <a href="https://github.com/seesamjagan" className="icon">
      <Icon icon="github" />
    </a>
    -
    <a href="https://twitter.com/seesamjagan" className="icon">
      <Icon icon="twitter" />
    </a>
    -
    <a href="https://facebook.com/seesamjagan" className="icon">
      <Icon icon="facebook" />
    </a>
    -
  </section>
);

const Quote = () => {
  return (
    <article className="quote">
      <p>
        A passionate software engineer who have <code>12+</code> years of
        experience in <code>UI architecture</code>, <code>UI development</code>{" "}
        & bug fixing for medium to large scale enterprise level web application
        which spans across multiple domains such as <code>storage</code>,{" "}
        <code>networking</code>, <code>engineering</code>, <code>finance</code>,{" "}
        <code>multimedia</code>, <code>LMS and LCMS</code>
      </p>
    </article>
  );
};

const Footer = () => (
  <footer className="footer">
    Copyrights &copy; All Rights Reserved. {new Date().getFullYear()} Jagan
    Langa .
  </footer>
);
const Main = () => (
  <div className="main">
    <PageBaner />
    <Header />
    <SocialMedia />
    <Clock />
    <Quote />
    <Footer />
  </div>
);

const More = () => (
  <div className="more">
    <Route path="/" component={About} exact />
    <Route path="/experience" component={Experience} />
    <Route path="/projects" component={Projects} />
    <Route path="/education" component={Educations} />
    <Route path="/awards" component={Awards} />
    <Route path="/portfolio" component={Portfolio} />
  </div>
);

export class App extends Component {
  render() {
    return (
      <div className="root">
        <NavBar />
        <Main />
        <More />
      </div>
    );
  }
}

export class PageBaner extends Component {
  render() {
    let width = Number(this.props.width) || 450;
    let height = Number(this.props.height) || 200;
    let offsetY = 3;
    let d1 = `M 0 ${offsetY} 
      L ${width} ${offsetY} 
      L ${width} ${height * 0.66 + offsetY} 
      L ${width / 2} ${height + offsetY} 
      L 0 ${height * 0.66 + offsetY} z`;

    let d2 = `M 0 0 
      L ${width} 0 
      L ${width} ${height * 0.66}
      L ${width / 2} ${height}
      L 0 ${height * 0.66} z`;

    const CS = 150;
    const SW = 10;

    return (
      <svg
        className="my-svg"
        viewBox={`0 0 ${width} ${height+120}px`}
        style={{height: `${height+CS/2}px`, width: `${width}px`}}
      >
        <defs>
          <filter id="f1" x="0" y="0" width="120%" height="120%">
            <feOffset result="offOut" in="SourceAlpha" dx="0" dy={offsetY} />
            <feGaussianBlur
              result="blurOut"
              in="offOut"
              stdDeviation={offsetY}
            />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        {/* <path d={d1} fill="rgba(0,0,0,0.75)" /> */}
        <path d={d2} fill="#369" filter="url(#f1)" />
        <svg
          x={width / 2 - CS / 2 - SW}
          y={height - CS / 2}
          width={CS}
          height={CS}
        >
          <circle
            r={CS / 2 - SW}
            cx={CS / 2 + SW}
            cy={CS / 2 + SW}
            fill="#369"
            stroke="#FFF"
            strokeWidth={SW}
          />
          <image
            xlinkHref={"./assets/images/profile picture.png"}
            x={CS / 2 - 64 + SW}
            y={CS / 2 - 64 + SW}
            width="128"
            height="128"
          />
        </svg>
      </svg>
    );
  }
}

export const Clock = () => {
  let [d, setDate] = useState(new Date());
  useEffect(() => {
    let timeId = setInterval(() => {
      setDate(new Date());
    }, 999);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  let t = [
    "🕛",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚"
  ];
  return (
    <span className="clock">
      {t[d.getHours() % 12]} : {t[d.getMinutes() % 12]} :{" "}
      {t[d.getSeconds() % 12]}
    </span>
  );
};
