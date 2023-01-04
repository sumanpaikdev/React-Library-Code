import React from 'react'
import './App.css'
import Window from "./Window"

function App() {
  const [ togglestat, setTogglestat] = React.useState(true)
  function toggle() {
    setTogglestat((prevstate) => !prevstate)
  }
  return (
    <div className="App">
      <button onClick={toggle}>Toggle window</button>
      {togglestat && <Window/>}
    </div>
  )
}

export default App
