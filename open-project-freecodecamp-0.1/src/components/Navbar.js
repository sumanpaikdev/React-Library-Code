import React from "react"
import logo from "../images/react-logo.png"

export default function Navbar() {
    return(
        <div className="navbar--container">
            <img src={logo} alt="" className="nav--logo"/>
            <h3 className="nav--left">ReactLeft</h3>
            <h4 className="nav--right">ReactRight-Open</h4>
        </div>
    )
} 