import React from 'react'
import './App.css'

function App() {

  const [message, setMessage] = React.useState(["hi", "i'm" , "email"])


  return (
    <div className="App">
      {
        message.length === 0 ?
        <h1>You are all caught up!🙌</h1> :
        <h1>You have {message.length} unread {message.length > 1 ? "messages" : "message"} 💁</h1>

      }
    </div>
  )
}

export default App
