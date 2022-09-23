import React from "react"

export default function Header(props) {
    return(
        <header className="header--container">
            <img className="troll--img" src={props.troll} alt="error loading" />
            <h2 className="header--left">Meme Generator</h2>
            <h4 className="header--right">React Course-Project 3</h4>
        </header>
    )
}