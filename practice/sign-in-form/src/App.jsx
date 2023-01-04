import React from "react";
import "./App.css";

export default function App() {
  const [userData, setUserData] = React.useState({
    userName: "",
    password: "",
    confirmPassword: "",
    newsletterCheck: false,
  });
  // console.log(userData);
  function updateInfo(event) {
    setUserData((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      };
    });
  }
  function submitForm(event) {
    event.preventDefault();

    if (userData.password === userData.confirmPassword) {
      console.log("password matched");
      console.log("Login successful")
    } else {
      console.log("password does not matched please confirm your password.");
      return
    }
    if(userData.newsletterCheck === true){
      console.log("you have subscrobe our newsletter");
    }
  }
  return (
    <div className="app-container">
      <form className="form-element">
        <input
          type="text"
          name="userName"
          placeholder="enter the username"
          required
          onChange={updateInfo}
          value={userData.userName}
        />
        <input
          type="password"
          name="password"
          placeholder="choose password"
          required
          onChange={updateInfo}
          value={userData.password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="choose confirm password"
          required
          onChange={updateInfo}
          value={userData.confirmPassword}
        />
        <div className="news">
          <input
            type="checkbox"
            id="newslatter"
            name="newsletterCheck"
            onChange={updateInfo}
            checked={userData.newsletterCheck}
          />
          <label htmlFor="newslatter">subscribe the newsletter</label>
        </div>
        <button type="submit" onClick={submitForm}>
          sign In
        </button>
      </form>
    </div>
  );
}
