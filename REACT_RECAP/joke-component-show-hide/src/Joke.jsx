import React from "react"

export default function Joke(props) {

    const [punch, setPunch] = React.useState(true)
    function showHide() {
        setPunch((prevpunch => !prevpunch))
    }
     return(
        <div className="joke">
            {props.setup && <h2>{props.setup}</h2>}
            {punch && <p>{props.punchline}</p>}
            <button onClick={showHide}>{punch ? "Hide" : "Show"} Joke</button>
            <hr />
        </div>
    )
}