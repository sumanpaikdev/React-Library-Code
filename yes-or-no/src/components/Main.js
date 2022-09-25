import React from "react"

export default function Main() {
    const [text, setText] = React.useState("Yes")


    function changeContent() {
        setText("No")

    }

    return (
        <div className="main--container">
            <h2>Is React Important?</h2>
            <div className="yes--no" onClick={changeContent}>
                <h4>{text}</h4>
            </div>
        </div>
    )
}