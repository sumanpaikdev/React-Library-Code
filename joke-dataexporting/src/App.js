import React from "react";
import Joke from "./components/Joke";
import JokeData from "./components/JokeData";

function App() {
  const jokeElement =JokeData.map((joke) =>{
    return <Joke maintitle={joke.setup} subtitle={joke.punchline}/>
  }) 
  return (
    <div className="App">
      {jokeElement}
    </div>
  );
}

export default App;
