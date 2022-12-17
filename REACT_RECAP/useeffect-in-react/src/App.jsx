import React from "react";
import "./App.css"

export default function App() {

  const [number, setNumber] = React.useState(0)

  console.log("show count")
  React.useEffect(() => {
    console.log("useeffect run")
    
  })

  return(
    <div className="container">
      <h2>The count is: {number} </h2>
      <button onClick={() => setNumber(prevnum => prevnum + 1)}>Add</button>
    </div>
  )
}