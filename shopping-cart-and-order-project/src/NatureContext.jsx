import React, { useEffect, useState } from "react"
const NatureContext = React.createContext()

function NatureContextProvider(props) {
    const [allNatureImages, setAllNatureImages] = useState([])
    // const [isFavourite, setIsFavourite] = useState(false)
    const [allcartitem, setAllcartitem] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/sumanpaikdev/SumanPaik-React-Store-API/master/Data.json')
        .then((response) => response.json())
        .then((data) => setAllNatureImages(data));
    }, [])

    function toggleIsFavourite(id) {
        const newUpdatedArray = allNatureImages.map((natureImg) => {
            if(natureImg.id === id){
                return { ...natureImg, isFavourite: !natureImg.isFavourite}
            }
            return natureImg
        })
        setAllNatureImages(newUpdatedArray)
    }

    function addcartitem(newItem) {
        setAllcartitem(previtem => [...previtem, newItem])
    }
    function removecartitem(id) {
        setAllcartitem(previtems => previtems.filter(items => items.id !== id)) 
    }
    return(
        <NatureContext.Provider value={{allNatureImages, toggleIsFavourite, addcartitem, allcartitem, removecartitem }}>
            {props.children}
        </NatureContext.Provider>
    )
}
export {NatureContextProvider, NatureContext}



// Api Link 
// https://raw.githubusercontent.com/sumanpaikdev/SumanPaik-React-Store-API/master/Data.json