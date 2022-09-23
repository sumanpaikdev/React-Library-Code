import React from "react";

export default function YesNo() {
    const [isImportent, setIsImportent] = React.useState("Yes")

    function handleevent(){
        setIsImportent("No")
    }


    return (
        <div className="yesno--container">
            <h2>Demonstrate React JS</h2>
            <div className="state--container" onClick={handleevent}>
                <h4 className="state--title">{isImportent}</h4>
            </div>
        </div>
    )
}