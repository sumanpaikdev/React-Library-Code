import './App.css'
import React from 'react'


function App() {

  const [middleNumber, setMiddleNumber] = React.useState(0)
  function leftnumber() {
    setMiddleNumber((num)=> num-1)
  }
  function rightnumber() {
    setMiddleNumber((num)=> num+1)
  }

  return (
    <div className="App">
      <div onClick={leftnumber} className="left"> - </div>
      <div className="middle"> {middleNumber} </div>
      <div onClick={rightnumber} className="right"> + </div>
    </div>
  )
}

export default App;
