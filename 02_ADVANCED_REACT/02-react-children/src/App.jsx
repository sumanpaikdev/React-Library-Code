import React from "react";
import "./App.css";
import Border from "./Border";

// By using React Children we can get rit out of creating this extra components

// import UserData from "./UserData";
// import UserImage from "./UserImage";
// import UserEmail from "./UserEmail";
import UserDataTemplate from "./UserDataTemplate";

export default function App() {
  return (
    <div className="app-container">
      {/* props.children with self closing tags */}
      <Border>
        <h1>This is react parent element</h1>
        <button>Common Button For the event</button>
      </Border>
      <Border>
        <input type="email" />
        <button>submit now</button>
      </Border>

      {/* using react children */}
      <h1>React JS</h1>

      <UserDataTemplate>
        <h2>It is a title</h2>
        <p>
          hey, I am suman paik a frontend web developer from india. Its my small
          react stuff for understanding purpose
        </p>
      </UserDataTemplate>

      <h3>This is the end of UserData component</h3>

      <UserDataTemplate>
        <img
          src="https://images.unsplash.com/photo-1671725779305-bff966b40cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
          width="350px"
        />
        <p>The description of image</p>
      </UserDataTemplate>

      <h3>This is the end of UserImage component</h3>

      <UserDataTemplate>
        <h2>Don't Enter Your Email Address</h2>
        <input type="email" placeholder="enter email ..." />
        <button>Submit Now</button>
      </UserDataTemplate>
    </div>
  );
}
