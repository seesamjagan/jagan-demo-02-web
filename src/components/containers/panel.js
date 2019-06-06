import React from "react";

import "./panel.scss";

export default function Panel({ children, title, className,  titleId }) {
  return (
    <div className={["panel", className].join(" ")}>
      <header className="panel-header" id={titleId||title}><h2>{title}</h2></header>
      <section className="panel-body">
          {children}
      </section>
    </div>
  );
}

Panel.defaultProps = {className: ""};