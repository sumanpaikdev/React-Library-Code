import React from "react";
import "./App.css"

export default function App() {

  // const [number, setNumber] = React.useState(0)

  // console.log("show count")
  // React.useEffect(() => {
  //   console.log("useeffect run")
    
  // })

  const [addNumber, setAddNumber] = React.useState(0)
  React.useEffect(() => {
    console.log("useEffect is running ...")
  }, [addNumber])
  return(
    // <div className="container">
    //   <h2>The count is: {number} </h2>
    //   <button onClick={() => setNumber(prevnum => prevnum + 1)}>Add</button>
    // </div>
    <div className="app-contaienr">
      <p>Count &rarr; {addNumber}</p>
      <button onClick={() =>setAddNumber((prevnum) => prevnum + 1)}>Add +</button>
      <button onClick={() =>setAddNumber((prevnum) => prevnum - 1)}>Sub -</button>
    </div>
  )
}