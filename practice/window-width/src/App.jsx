import React from 'react'
import './App.css'
import WindowWidth from './windowWidth'

function App() {
const [toggleState, setToggleState] = React.useState(true)
function changeState() {
  setToggleState(prevState => !prevState)
}
  return (
    <div className="App">
        <button onClick={changeState}>Toggle Window</button>
        {toggleState && <WindowWidth/>}
    </div>
  )
}

export default App
