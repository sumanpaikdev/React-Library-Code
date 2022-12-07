import React from 'react'
import './App.css'

function App() {
  
  const [item, setItem] = React.useState(["Item 1,", "  Item 2,"])
  function addItem() {
    setItem(
      prevItem => [...prevItem, `  Item ${prevItem.length + 1},  `] // here i am using spread operater
    )
  }
  function saveitem() {
    document.getElementById("sv").textContent = item
  }
  return (
    <div className="App">
      <button onClick={addItem} className="btn" >Add Item</button>
       <b id="in">{item}</b> 
        <button onClick={saveitem} className="btn">Save</button>
        <p id='sv'></p>
    </div>
  )
}

export default App
