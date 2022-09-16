import './App.css';

export default function App() {
  // const colorName = ["white", "red", "yellow", "green", "orange", "violet"];
  const colorName = [
    <h3>white</h3>,
    <h3>red</h3>,
    <h3>yellow</h3>,
    <h3>green</h3>,
    <h3>orange</h3>,
    <h3>violet</h3>
  ]

  return (
    <div>

      {colorName}
    </div>
  );
}


