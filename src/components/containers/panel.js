import React from "react";

import "./panel.scss";
import { Icon } from "../utils";

const defaultIcon = <Icon icon="sticky-note" />;

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
          {icon ? icon : iconFunction ? iconFunction() : defaultIcon}
        </span>
        <h2 className="title">{title}</h2>
        {showClose && (
          <span className="icon close" onClick={onClose}>
            <Icon icon="times-circle" />
          </span>
        )}
      </header>
      <section className="panel-body">{children}</section>
    </div>
  );
}

Panel.defaultProps = { className: "" };
