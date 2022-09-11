import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// import React from "react";
// import ReactDOM from "react-dom";
// import logo from "./component"



// const pageone = (
//     <div>
//     <img src="" alt="" />
//     <nav>
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// </div>
// )
// ReactDOM.render(
//    pageone,
//     document.getElementById("root")
// )