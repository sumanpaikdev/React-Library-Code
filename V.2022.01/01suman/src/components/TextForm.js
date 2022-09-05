import React, { useState } from 'react'


export default function (props) {
    const primaryButtonUPPERClick = () => {
        // console.log("uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const primaryButtonLOWERClick = () => {
        // console.log("lowerrcase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("onChange");
        setText(event.target.value);

    }

    const [Text, setText] = useState('Enter the text...');  // hook
    // setText("New text");
    return (
        <>
            <div>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <label htmlFor="mytext" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={Text} onChange={handleOnChange} id="mytext" rows="10"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-1" onClick={primaryButtonUPPERClick}>Convert Uppercase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={primaryButtonLOWERClick}>Convert Lowercase</button>
            </div>
            <div className="container2 my-3">
                <h2>Your text summary :</h2>
                 <p>{Text.split(" ").length} Words AND {Text.length} Characters</p>
            <h2>Preview</h2>
            <p>{Text}</p> 


             
                
                
            </div>
        </>
    )
}
