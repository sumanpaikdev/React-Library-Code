import React from "react";

export default function Window() {

    const [windowwidth, setWindowwidth] = React.useState(window.innerWidth)

    React.useEffect(function() {
        function resizewindow() {
            console.log("collecting width...")
            setWindowwidth(window.innerWidth)
        }
        window.addEventListener("resize", resizewindow)
        return (function() {
                window.removeEventListener("resize", resizewindow)
            })
        
    }, [])

    return(
        <div className="window">
            <h2>Window width : {windowwidth}</h2>
        </div>
    )
}