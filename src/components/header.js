import React from 'react'
import "./header.scss";

export default function Header() {
    return (
        <header className="header">
            <a href="./" className="profile-picture" />
            <h2 className="name">Jagan Langa</h2>
            <h2 className="title">Technical Architect</h2>
        </header>
    )
}
