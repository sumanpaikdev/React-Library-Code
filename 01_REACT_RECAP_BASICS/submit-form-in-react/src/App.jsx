import React from "react";
import "./App.css";

export default function App() {
  const [userData, setUserData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    studentStatus: false,
    comment: "",
    class: "",
    chooseColor: "",
  });

  function inputChange(event) {
    setUserData((prevData) => {
      const { name, type, value, checked } = event.target;
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitClick(event) {
    event.preventDefault();
    document.getElementById("terminal").style.display = "block";
    
    console.log(userData);
  }

  function closeTerminal() {
    document.getElementById("terminal").style.display = "none";
  }
  return (
    <div className="app-container" id="app">
      <form action="" className="react-form">
        <input
          className="input-text"
          type="text"
          placeholder="enter your firstname"
          name="firstname"
          value={userData.firstname}
          onChange={inputChange}
        />
        <input
          className="input-text"
          type="text"
          placeholder="enter your lastname"
          name="lastname"
          value={userData.lastname}
          onChange={inputChange}
        />
        <input
          className="input-text"
          type="email"
          placeholder="enter your email"
          name="email"
          value={userData.email}
          onChange={inputChange}
        />
        <div className="student">
          <input
            type="checkbox"
            id="studentid"
            name="studentStatus"
            onChange={inputChange}
            checked={userData.studentStatus}
          />
          <label htmlFor="studentid">Is it React JS?</label>
        </div>

        <textarea
          name="comment"
          id=""
          cols="30"
          rows="5"
          placeholder="write about yourself"
          onChange={inputChange}
          value={userData.comment}
        />

        <fieldset>
          <legend>Select your Tech</legend>
          <div className="clstat">
            <input
              type="radio"
              id="class10"
              name="class"
              onChange={inputChange}
              value="class React"
              checked={userData.class === "class React"}
            />
            <label htmlFor="class10">Class React</label>
          </div>
          <div className="clstat">
            <input
              type="radio"
              id="class11"
              name="class"
              onChange={inputChange}
              value="class JavaScript"
              checked={userData.class === "class JavaScript"}
            />
            <label htmlFor="class11">Class JavaScript</label>
          </div>
          <div className="clstat">
            <input
              type="radio"
              id="class12"
              name="class"
              onChange={inputChange}
              value="Class Typescript"
              checked={userData.class === "Class Typescript"}
            />
            <label htmlFor="class12">Class Typescript</label>
          </div>
        </fieldset>

        <label className="chooseclass" htmlFor="choose">
          Choose your favourite color &rarr;
        </label>
        <select
          name="chooseColor"
          id="choose"
          onChange={inputChange}
          value={userData.chooseColor}
        >
          <option>--choose--</option>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
        <button onClick={submitClick}>Submit Now</button>
      </form>

      <div className="terminal" id="terminal">
        <div className="time" id="time" onClick={closeTerminal}>X</div>
        <p className="openTerminal">
          Open the developer tool and see the terminal
        </p>
      </div>
    </div>
  );
}

// Thanks for watching this video
