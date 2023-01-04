import React from "react";

export default function DisplayWidth() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = React.useState(window.innerHeight)

    React.useEffect(function() {

            window.addEventListener("resize", () => {setWindowWidth(window.innerWidth);console.log("running...")})
            window.addEventListener("resize", () => {setWindowHeight(window.innerHeight);console.log("running...")})
            return(function() {
            window.removeEventListener("resize", () => {setWindowWidth(window.innerWidth);console.log("running...")})
            window.removeEventListener("resize", () => {setWindowHeight(window.innerHeight);console.log("running...")})


            })
    }, [])
    return(
        <div className="display">
            <b>Current Display Width &rarr; {windowWidth} </b>
            <b>Current Display Height &rarr; {windowHeight} </b>
        </div>
    )
}