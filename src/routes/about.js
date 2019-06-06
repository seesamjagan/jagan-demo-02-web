import React from 'react'
import Panel from '../components/containers/panel';

export default function About(props) {
    return (
        <Panel title="About" className="card" titleId="about">
            <p>
                <img src="./assets/images/male-silhoutte-02.png" alt="about" />
            </p>
            <p>Having 11+ years of experience in architecting user interface, UI development for medium to large scale enterprise level web application which spans across multiple domains such as storage, networking, engineering, finance, multimedia,  LMS and LCMS.</p>
        </Panel>
    )
}
