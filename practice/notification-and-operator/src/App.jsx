import React from "react";
import "./App.css"

export default function App() {
  const [notification, setNotification] = React.useState(["first", "second", "third"])


  return(
    <div className="app">
       { notification.length === 0 && <h1>You have all caught up</h1>}
       {notification.length && <h1>You have {notification.length} {notification.length > 1 ? `notifications` : `notification`}</h1>}
    </div>
  )
}
