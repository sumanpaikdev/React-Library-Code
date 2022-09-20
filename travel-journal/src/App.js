import './App.css';
import Navbar from "./components/Navbar"
import Place from './components/Place';
import Data from './Data';

// logo icon
import world from "./images/world.png"
import pointer from "./images/placeholder.png"

function App() {
  const dataset = Data.map((itemDetails) => {
    return (
      <Place
        point={pointer}
        details={itemDetails}
      />
    )

  })
  return (
    <div className='react--app--container'>
      <div className="nav--cont--bar">

        <Navbar img={world} />
      </div>
      <div className="app--container">


        {dataset}
      </div>
    </div>
  );
}

export default App;
