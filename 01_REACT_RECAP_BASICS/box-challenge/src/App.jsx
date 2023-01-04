import React from "react"
import "./App.css"
import Box from "./Box"
import Boxdata from "./Boxdata"

export default function App() {

  const [state, setState] = React.useState(Boxdata) 

  function toggle(id) {
    setState((prevstate) => {
      return(
          prevstate.map((stateData) =>{
            return stateData.id === id ? {...stateData, bool: !stateData.bool} : stateData
          })
      )
    })
  }
  // function toggle(id){                                      //practice purpose
  //   setState((prevState) => {
  //     return(
  //       prevState.map((newdata) => {
  //         return(
  //           newdata.id === id ? {...newdata, bool: !newdata.bool} : newdata
  //         )
  //       })
  //     )
  //   })
  // }
  // function toggle(id) {                                     //practice purpose
  //   setState((prevstate) => {
  //     return(
  //       prevstate.map((previtem) => {
  //         return(
  //           previtem.id === id ? {...previtem, bool: !previtem.bool} : previtem
  //         )
  //       })
  //     )
  //   })
  // }
  const boxitem = state.map((boxdata) => {
    return(
      <Box
        key={boxdata.key}
        id={boxdata.id}
        status={boxdata.bool}
        toggle={() => toggle(boxdata.id)}
      />
    )
  })

  return(
    <div className="app-container">
      {boxitem}
    </div>
  )
}