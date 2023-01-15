import React from "react"
import {Link} from "react-router-dom"

export default function Header() {
    return(
        <div className="header">
            <header>
                <ul>
                    <li><Link to="/" className="header-nav">Home</Link></li>
                    <li><Link to="/about" className="header-nav">About</Link></li>
                    <li><Link to="/contact" className="header-nav">Contact</Link></li>
                </ul>
            </header>
        </div>
    )
}