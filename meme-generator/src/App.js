import './App.css';
import Header from "./components/Header"
import Main from './components/Main';
// import MemeData from './MemeData';


import logo from "./images/TrollFace.png"

function App() {
  return (
    <div className="app--container">
      <Header troll={logo}/>
      <Main />
    </div>
   
  );
}

export default App;
