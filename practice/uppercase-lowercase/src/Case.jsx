import React from "react";

export default function Case() {

    const [text, setText] = React.useState({
        comment: ""
    })
    function lowercase() {
        setText(() =>{
          return text.comment.toUpperCase()
        })
    }
    function uppercase() {

    }
    function inputchange(event) {
        setText(() => {
            return {[event.target.name]: event.target.value}
        })
    }
    console.log(text.comment)
    return(
        <div className="case-container">
            <textarea name="comment" value={text.comment} onChange={inputchange} id="inputText" placeholder="enter your text ..." />
            <div className="btn">
                <button className="lowercase btnn" onClick={lowercase}>Lowercase</button>
                <button className="uppercase btnn" onClick={uppercase}>Uppercase</button>
                <button className="copy btnn">Copy Text</button>
            </div>
        </div>
    )
}