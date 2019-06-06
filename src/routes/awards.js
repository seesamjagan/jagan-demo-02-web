import React from "react";
import Panel from "../components/containers/panel";

export default function Awards(props) {
  return (
    <Panel title="Awards" className="card" titleId="awards">
      <p>
        <img src="./assets/images/awards.png" alt="about" />
      </p>
    </Panel>
  );
}
