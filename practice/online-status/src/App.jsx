import React from "react";
import "./App.css"
import data from "./data.json"
import Online from "./Online";

export default function App() {

  const [user, setUser] = React.useState(data)
  function toggle(id) {
      setUser((prevuser) => {
        return(
          prevuser.map((userdata) => {
            return userdata.id === id ? {...userdata, status: !userdata.status} : userdata
            
          })
        )
      })
  }

  const onlinedataitem = user.map((onlinedata) => {
    return(
      <Online
        id={onlinedata.id}
        status={onlinedata.status}
        key={onlinedata.id}
        toggle={toggle(onlinedata.id)}
      />
    )
  })
  return(
    <div className="App">
      {onlinedataitem}
    </div>
  )
}