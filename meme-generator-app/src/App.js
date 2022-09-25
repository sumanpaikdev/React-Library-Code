import './App.css';
import Meme from './components/Meme';
import mmimage from "./images/Troll Face.png"

function App() {
  return (
    <div className="app--container">
      <Meme img={mmimage}/>
    </div>
  );
}

export default App;
