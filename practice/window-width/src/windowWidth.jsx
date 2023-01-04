import React from "react"

export default function WindowWidth() {
    const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth)

    React.useEffect(function() {
        function updateWidth() {
            console.log("Updating width ...")
            setCurrentWidth(window.innerWidth)

        }
        window.addEventListener("resize", updateWidth)
        return(() => {
            window.removeEventListener("resize", updateWidth)
        })
    }, [])
    return(
        <div className="win">
            <h1>Current Width: <span>{currentWidth}</span></h1>
        </div>
    )
}