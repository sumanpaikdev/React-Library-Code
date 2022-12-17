import React from "react";

export default function MemeGenerator(props) {
  const [userData, setUserData] = React.useState({
    firstline: "",
    secondline: "",
    memePicture: "http://i.imgflip.com/1bij.jpg",
  });

  function handleclick(event) {
    setUserData((prevdata) => {
      return {
        ...prevdata,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [memeCollection, setmemeCollection] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((memeData) => setmemeCollection(memeData.data.memes));
  });

  function getNewMeme() {
    const randomNumber = Math.floor(Math.random() * memeCollection.length);
    const url = memeCollection[randomNumber].url;
    setUserData((prevmeme) => ({
      ...prevmeme,
      memePicture: url,
    }));
  }

  return (
    <div className="meme-container">
      <nav className="navbar">
        <img src={props.logo} />
        <p className="meme-nav">Meme Generator</p>
      </nav>

      <main className="main-container">
        <input
          type="text"
          placeholder="enter the first line"
          name="firstline"
          onChange={handleclick}
          value={userData.firstline}
        />
        <input
          type="text"
          placeholder="enter the last line"
          name="secondline"
          onChange={handleclick}
          value={userData.secondline}
        />
      </main>

      <div className="button-container">
        <button className="getmeme" onClick={getNewMeme}>
          Get a new meme
        </button>
      </div>

      <div className="meme-body">
        <div className="meme-image">
          <img src={userData.memePicture} />
        </div>
        <h1 className="upLine" id="up">
          {userData.firstline}
        </h1>
        <h1 className="downLine" id="down">
          {userData.secondline}
        </h1>
      </div>
    </div>
  );
}
