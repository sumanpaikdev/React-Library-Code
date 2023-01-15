import React from "react"
import { Link } from "react-router-dom"

export default function App() {
    return(
        <div className="header-container">
            <Link to="/" className="menu">Home</Link>
            <Link to="/services" className="menu">Servises</Link>
        </div>
    )
}