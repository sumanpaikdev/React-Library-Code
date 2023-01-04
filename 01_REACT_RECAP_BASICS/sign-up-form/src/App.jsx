import React from "react";
import "./App.css";
import logo from "./account.png";

export default function App() {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });
  console.log(userData);
  function handleClick(event) {
    setUserData((prevdata) => {
      const { name, type, checked, value } = event.target;  //object destructuring
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }


  function submitClick(event) {
    event.preventDefault();
    document.getElementById("terminal").style.display = "block";

    if(userData.password === userData.confirmPassword){
      // console.log("Password is correct 😊")
      document.getElementById("para").textContent="Password is correct 😊"
    }else{
      // console.log("Password does not match 😫")
      document.getElementById("para").textContent="Password does not match 😫"
      document.getElementById("paraon").textContent="Try again"

      return
    }
    if(userData.newsletter) {
      // console.log("Sign up Successful 🎉")
      document.getElementById("paraon").textContent="Sign up Successful 🎉"

    }
  }
  function closewindow() {
    document.getElementById("terminal").style.display = "none";
  }
  return (
    <div className="app-container">
      <img src={logo} />
      <form className="sign-form">
        <input
          className="form-input"
          type="text"
          placeholder="username"
          name="username"
          value={userData.username}
          onChange={handleClick}
        />
        <input
          className="form-input"
          type="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={handleClick}
        />
        <input
          className="form-input"
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleClick}
        />

        <div className="newsletter">
          <input
            type="checkbox"
            id="confirmCheck"
            name="newsletter"
            checked={userData.newsletter}
            onChange={handleClick}
          />
          <label htmlFor="confirmCheck">subscribe to our newsletter</label>
        </div>

        <button onClick={submitClick}>Sign in</button>
      </form>
      <div className="terminal" id="terminal">
        <p id="para"></p>
        <p id="paraon"></p>
        <div className="x" onClick={closewindow}>
          x
        </div>
      </div>
    </div>
  );
}
