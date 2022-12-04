import React from "react";
import "./input.css";
import "./memesec.css"
import MemeData from "../memedata";

export default function InputSection() {
  const [urlLink, setUrlLink] = React.useState(
    "https://i.imgflip.com/1g8my4.jpg"
  );
  
  function getMemeImage() {
    const memeArray = MemeData.data.memes;
    const randNumber = Math.floor(Math.random() * memeArray.length)
    console.log(randNumber)
    console.log(memeArray[randNumber].url)
    const memeShowImage = memeArray[randNumber].url
    setUrlLink(memeShowImage)
  }

  return (
    <div className="input-section">
      <div className="input-text">
        <input type="text" className="left-in" placeholder="enter first line" />
        <input
          type="text"
          className="right-in"
          placeholder="enter second line"
        />
      </div>
      <div className="btn-div">
        <button onClick={getMemeImage} className="gen-btn">
          Get a new meme image
        </button>
      </div>
      <div className="meme-sec">
        <img src={urlLink} />
      </div>
    </div>
  );
}
