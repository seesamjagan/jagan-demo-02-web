import React from "react";

import "./panel.scss";
import { Icons } from "../utils";



export default function Panel({
  children,
  title,
  className,
  titleId,
  icon = null,
  iconFunction = null,
  showClose = false,
  onClose=null
}) {
  return (
    <div className={["panel", className].join(" ")}>
      <header className="panel-header" id={titleId || title}>
        <span className="icon">
          {icon ? icon : iconFunction ? iconFunction() : <Icons.Default />}
        </span>
        <h2 className="title">{title}</h2>
        {showClose && (
          <span className="icon close" onClick={onClose}>
            <Icons.Close />
          </span>
        )}
      </header>
      <section className="panel-body">{children}</section>
    </div>
  );
}

Panel.defaultProps = { className: "" };
