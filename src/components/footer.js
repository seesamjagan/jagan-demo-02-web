import React from 'react'
import "./footer.scss"
export default function Footer({features}) {
    return (
        <footer className="footer">
            <p>Firebase SDK loaded with {features.join(", ")}</p>
        </footer>
    )
}
