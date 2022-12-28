import React from "react";
import "./App.css"
import User from "./User"
import data from "./data.json"

export default function App() {

  const [userInfo, setUserInfo] = React.useState(data)

  function changeUserStatus(id) {
    setUserInfo(prevdata => {
      return(
        prevdata.map(userData => {

          return(
            userData.id === id ? {...userData, status: !userData.status} : userData
          )
        })
      )
    })
    // console.log("clicked")
    // console.log(id)
    // setUserInfo(prevdata => {
    //   return prevdata.map(userData.map)
    // })
}
  const userStatus = userInfo.map((user) => {
    return(
      <User
        id={user.id}
        status={user.status}
        key={user.id}
        changeUserStatus={() => changeUserStatus(user.id)}
      />
    )
  })
  return(
    <div className="app">
        {userStatus}
    </div>
  )
}