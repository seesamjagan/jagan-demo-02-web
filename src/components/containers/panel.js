import React from "react";

import "./panel.scss";

export default function Panel({ children, title, className }) {
  return (
    <div className={["panel", className].join(" ")}>
      <header><h2>{title}</h2></header>
      <section>
          {children}
      </section>
    </div>
  );
}

Panel.defaultProps = {className: ""};