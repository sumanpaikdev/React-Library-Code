import './App.css';
import Navbar from "./components/Navbar"
import Place from './components/Place';

// logo icon
import world from "./images/world.png"
import pointer from "./images/placeholder.png"

function App() {
  return (
    <div className="app--container">
      <Navbar img={world}/>
      <Place point={pointer} />
    </div>
  );
}

export default App;
