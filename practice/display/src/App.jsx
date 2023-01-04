import React from 'react'
import './App.css'
import DisplayWidth from './DisplayWidth'

function App() {
  const [display, setDisplay] = React.useState(true)

  return (
    <div className="App">
      <button onClick={() => setDisplay(prevdata => !prevdata)}>Toggle</button>
      {display && <DisplayWidth/>}
    </div>
  )
}

export default App
