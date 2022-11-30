import './App.css';

// file link 

import Navbar from './components/Navbar';
import Header from './components/Header';
import Heading from './components/Heading';
import Cards from './components/Cards';
import Data from './Data';

// images source 

import airbndLogo from "./images/airbnblogo.png"
import headerLogo from "./images/GroupHeader.png"
import starlogo from "./images/Starlogo.png"

function App() {

  const cardsvar = Data.map((carditem) => {
    return (
      <Cards
        key={carditem.id}
        starimg={starlogo}
        carditem={carditem}
      />
    )
  })

  return (
    <div className="react--container">
      <div className="app--container">
        <Navbar img={airbndLogo} />
        <Header headerImage={headerLogo} />
        <Heading />
        <div class="scrolling-wrapper">
          {cardsvar}
        </div>
      </div>

    </div>

  );
}

export default App;


// rating={carditem.stats.rating}
// reviewCount={carditem.stats.reviewCount}
// location={carditem.location}
// title={carditem.title}
// price={carditem.price}