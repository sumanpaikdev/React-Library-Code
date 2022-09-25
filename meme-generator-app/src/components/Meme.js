import React from "react"
import memeData from "./memeData";


export default function Meme(props) {

    const [memesImages, setMemesImages] = React.useState("");


    function getMemeImage(){
        const memeToArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeToArray.length);
        setMemesImages(memeToArray[randomNumber].url)

    }
    return(
        <div className="meme--container">
                <nav className="navbar">
                    <div className="left">
                        <img className="left--img" src={props.img} alt="" />
                    </div>
                    <div className="right">Meme Generator</div>
                </nav>
                <div className="main--container">
                    <input className="input--type" type="text" placeholder="Enter first line" />
                    <input className="input--type" type="text" placeholder="Enter second line" />
                </div>
                    <button className="meme--button" onClick={getMemeImage}>Generate a Meme Image</button>
                <img src={memesImages}  className="meme--image--show" />
        </div>
    );
}