import './App.css';
import Navbar from "./components/Navbar"
import Place from './components/Place';
import Data from './Data';

// logo icon
import world from "./images/world.png"
import pointer from "./images/placeholder.png"

function App() {
  // const dataset = Data.map((Data) => {                  //This is Arrow function
  //   return (
  //     <Place
  //       point={pointer} 
  //       details={Data}
  //     />
  //   );

  // })
  const dataset = Data.map(myDataFunction)
  function myDataFunction(elementItems) {
    return(
      <Place
        point = {pointer}
        details = {elementItems}
       />
    );
  }
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
