import React from "react"
import ReactDOM from "react-dom"


const pageone = (
    <div>
    <img src="./react-logo.png" alt="" />
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
</div>
)
ReactDOM.render(
   pageone,
    document.getElementById("root")
)