import React from 'react'
import Panel from '../ui/containers/panel';
import { Icons } from '../ui/utils';

export default function Projects(props) {
    return (
        <Panel iconFunction={Icons.Projects} title="Projects" className="card" titleId="projects">
            <p>
                <img src="./assets/images/peopels-team-work.png" alt="projects" />
            </p>
        </Panel>
    )
}
