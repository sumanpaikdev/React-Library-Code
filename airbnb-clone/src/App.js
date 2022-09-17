import './App.css';

// file link 

import Navbar from './components/Navbar';
import Header from './components/Header';
import Heading from './components/Heading';
import Cards from './components/Cards';

// images source 

import airbndLogo from "./images/airbnblogo.png"
import headerLogo from "./images/GroupHeader.png"
import cardLogo1 from "./images/ganesh-ravikumar-P92MH8f-eNE-unsplash.jpg"
import starlogo from "./images/Starlogo.png"

function App() {
  return (
    <div className="react--container">
      <div className="app--container">
        <Navbar img={airbndLogo} />
        <Header headerImage={headerLogo} />
        <Heading />
        {/* <Cards img={cardLogo1} star={starlogo} /> */}
        <div class="scrolling-wrapper">
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        <Cards img={cardLogo1} star={starlogo} />
        </div>
      </div>

    </div>

  );
}

export default App;
