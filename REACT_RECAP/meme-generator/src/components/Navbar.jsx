import React from "react"
import "./navbar.css"

export default function Navbar(props) {
    return(
        <div className="nav-container">
            <div className="left-nav">
                <img src={props.imgmeme} alt="error_loading" className="meme-logo" />
            </div>
            <div className="right-nav">
                <p className="right-text">React Project</p>
            </div>
        </div>
    )
}