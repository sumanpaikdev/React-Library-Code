ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <Headingshow/>
        <Mycollection />
    </div>
);

function Headingshow() {
  return (
    <div>
      <h1>hey This is react</h1>
      <ul>
        <li>This is first</li>
        <li>This is first</li>
        <li>This is first</li>
      </ul>
    </div>
  );
}

function Mycollection() {
    return(
        <div>
            <ol>
                <li>This is my first collection</li>
                <li>This is my second collection</li>
                <li>This is my third collection</li>
                <li>This is my forth collection</li>
            </ol>
        </div>
    )
}