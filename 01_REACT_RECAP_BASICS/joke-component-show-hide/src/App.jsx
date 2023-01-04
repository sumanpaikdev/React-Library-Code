import React from "react"
import jokedata from "./jokedata"
import Joke from "./Joke"

export default function App() {

  const jokeitem = jokedata.map((data) => {
    return(
      <Joke
      id={data.id}
      setup={data.setup}
      punchline={data.punchline}
      />
    )
  })
  return(
    <div className="app">
      {jokeitem}
    </div>
  )
}