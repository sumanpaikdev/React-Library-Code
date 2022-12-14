import React from "react";
import "./App.css";

function App() {
  const [userdata, setUserdata] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
    reactLearning: false,
    selectwork: "",
    chooseColor: ""
  });
  function handleChange(event) {
    const {name, value, type, checked} = event.target
        setUserdata(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(userdata)

}
  return (
    <div className="App ">
      <form className="forms">
        <input
          type="text"
          placeholder="enter the first name"
          name="firstname"
          onChange={handleChange}
          value={userdata.firstname}
        />
        <input
          type="text"
          placeholder="enter the last name"
          name="lastname"
          onChange={handleChange}
          value={userdata.lastname}
        />
        <input
          type="email"
          placeholder="enter the email address"
          name="email"
          onChange={handleChange}
          value={userdata.email}
        />

        <textarea
          name="comment"
          id=""
          cols="40"
          rows="6"
          onChange={handleChange}
          value={userdata.comment}
        />

        <input
          type="checkbox"
          id="learning"
          name="reactLearning"
          onChange={handleChange}
          checked={userdata.reactLearning}
        />
        <label htmlFor="learning">Are you learning React?</label>

        <fieldset>
          <legend>Working Stauts</legend>
          <input
            type="radio"
            id="work"
            name="selectwork"
            onChange={handleChange}
            value="work"
            checked={userdata.selectwork === "work"}
          />
          <label htmlFor="work">work</label>
          <input
            type="radio"
            id="notwork"
            name="selectwork"
            onChange={handleChange}
            value="Does not work"
            checked={userdata.selectwork === "Does not work"}
          />
          <label htmlFor="notwork">Does not work</label>
          <input
            type="radio"
            id="maybework"
            name="selectwork"
            onChange={handleChange}
            value="Maybe work"
            checked={userdata.selectwork === "Maybe work"}
          />
          <label htmlFor="maybework">Maybe work</label>
        </fieldset>

        <label htmlFor="colorselect">Select a Color</label>
        <select name="chooseColor" id="colorselect" onChange={handleChange} value={userdata.chooseColor}>
          <option value="white">White</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="orange">orange</option>
        </select>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
