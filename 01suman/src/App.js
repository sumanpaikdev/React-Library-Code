import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
   <>
   {/* <Navbar title="FirstReact 1.0"  abouttext="About 1.0s" /> */}
   {/* <Navbar /> */}
   <Navbar title="FirstReact"  abouttext="About" />
   <div className="container">

   <TextForm heading="Enter the text"/>
   </div>
   </>
  );
}

export default App;
