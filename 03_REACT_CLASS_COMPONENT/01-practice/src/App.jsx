import React from "react";

// This is React function based component
// export default function App() {
//   return(
//     <div className="container">
//       <h2>Function based Component</h2>
//     </div>
//   )
// }

//Transform to class component
// class App extends React.Component{
//   render() {
//     return(
//       <div className="class">
//         <h2>Class based component</h2>
//       </div>
//     )
//   }
// }
// export default App

// practice

//is react important? yer or no

// export default function App() {

//   const [answer, setAnswer] = React.useState(true)
//   function changeAnswer(){
//     setAnswer(prevanswer => !prevanswer)
//   }
//   return(
//     <div className="app-container">
//       <h2>Is React important?</h2>
//       <div onClick={changeAnswer} className="answer">{answer ? "YES" : "NO"}</div>
//     </div>
//   )
// }

// ---------> class component
// export default class App extends React.Component {
//   state = {
//     answer: true
//   }
//   changeAnswer = () => {
//         this.setState(prevanswer => {
//           return{
//             answer: !prevanswer.answer
//           }
//         })
//       }
//   render() {
//     return (
//       <div className="app-container">
//         <h2>Is React important?</h2>
//         <div onClick={this.changeAnswer} className="answer">
//           {this.state.answer ? "YES" : "NO"}
//         </div>
//       </div>
//     );
//   }
// }

// constructor method in class component 
// 88888888888888888888888888888888888888888888888888888888888888888888888

import React from "react"

export default class App extends React.Component {
    /**
     * If you can't use class fields in your class components
     * for some reason, then you'll need to make use of the
     * class' `constructor` method to initialize your state object.
     * The first line of the constructor method should be a call
     * to `super()` like you see below, and then you can add your
     * state variable as a property attached to `this`
     */
    constructor(props) {
        super(props)
        this.state = {
            goOut: "Yes"
        }
        this.toggleGoOut = this.toggleGoOut.bind(this)
    }
    
    /**
     * If you can't use arrow functions for your class methods,
     * you'll need to make sure to `bind` them inside the 
     * constructor above.
     */
    
    toggleGoOut() {
        this.setState(prevState => {
            return {
                goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
        })
    }
    
    render() {
        return (
            <div className="state">
                <h1 className="state--title">Should I go out tonight?</h1>
                <div className="state--value" onClick={this.toggleGoOut}>
                    <h1>{this.state.goOut}</h1>
                </div>
            </div>
        )
    }
}
