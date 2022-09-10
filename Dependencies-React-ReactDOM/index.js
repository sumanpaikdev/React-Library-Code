import React from "react"
import ReactDOM from "react-dom"
const MyContent = (
    <div>
        <h1>React DOM and React without using script 'URL'</h1>
        <h3>This is how we get this.</h3>
        <ol>
            <li>First list</li>
            <li>Second list</li>
            <li>Third list</li>
            <li>Forth list</li>
        </ol>
    </div>

)

// Uncaught SyntaxError: Cannot use import statement outside a module (at index.js:1:1)


ReactDOM.render(
    MyContent,
    document.getElementById("root")
)