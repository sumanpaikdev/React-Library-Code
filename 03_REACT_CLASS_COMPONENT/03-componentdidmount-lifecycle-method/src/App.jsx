import React from "react";
import "./App.css"

export default class App extends React.Component {

  state ={
    character: {}
  }


  componentDidMount() {
    console.log("hello mount")
    fetch("https://swapi.dev/api/people/1/")
    .then(response => response.json())
    .then(movieData => {
      this.setState({character: movieData})
      // console.log(movieData)
    })
      
  }
  render() {
    console.log(this.state.character)
    return(
      <h1>{this.state.character.name}</h1>
    )
  }
}