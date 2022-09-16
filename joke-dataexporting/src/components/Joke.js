import React from "react"

export default function Joke (props){
    return(
        <div>
            <h3>SETUP: {props.maintitle} </h3>
            <p>PUNCHLINE: {props.subtitle}</p>
            <hr />

        </div>
    )
}