import React, { useEffect, useState, createContext } from "react";

const pictureContext = createContext();

function pictureContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

  const dataLink ="https://github.com/sumanpaikdev/SumanPaik-React-Store-API/blob/master/Data.json";
  useEffect(() => {
    fetch(dataLink)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);
  return (
    <pictureContext.Provider value={{allPhotos}}>
      {children}
    </pictureContext.Provider>
  );
}
export { pictureContextProvider, pictureContext };

// api link: https://github.com/sumanpaikdev/SumanPaik-React-Store-API/blob/master/Data.json
