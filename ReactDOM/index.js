// ReactDOM.render(<p>This is react DOM</p>, document.getElementById("root"))
// This is React DOM and rendering to web.


// creating navbar 
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function MyCustomComponent() {
  return(
    <div className="container">
      <h2>Hi this is React</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maiores officiis minima illo voluptatibus minus, ratione, facilis cum ipsam laudantium, provident libero iure temporibus corporis impedit voluptate totam sapiente! Eos dolores optio corporis assumenda.</p>
    </div>
  );
}

const NavbarOne =(
  <div>
    <img src="./logo192.png" alt="" width="50px" />
  <nav>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
  </div>
)
ReactDOM.render(

  // <div>
  //   <Navbar/>
  //   <MyCustomComponent/>
  // </div>
  NavbarOne,

  document.getElementById("root")

)