import React from "react";
import Panel from "../ui/containers/panel";
import { Icons } from "../ui/utils";

export default function Awards(props) {
  return (
    <Panel iconFunction={Icons.Awards} title="Awards" className="card" titleId="awards">
      <p>
        <img src="./assets/images/awards.png" alt="about" />
      </p>
    </Panel>
  );
}
