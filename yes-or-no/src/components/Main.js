import React from "react"

export default function Main() {
    // const [text, setText] = React.useState("Yes")


    // function changeContent() {
    //     setText("No")

    // }


    // yes no toggle

    const [toggleItem, setToggleItem] = React.useState(true)
    function changeItem() {
        setToggleItem(prevstate => !prevstate)
        
    }


    return (
        <div className="main--container">
            <h2>Is React Important?</h2>
            <div className="yes--no" onClick={changeItem}>
                <h4>{toggleItem ? "Yes" : "No"}</h4>
            </div>
        </div>
    )
}