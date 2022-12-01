function citycolllection(mycolllection) {
    const {first, second} = mycolllection
    const newcitycollection = {
        first, 
        second, 
        third: "delhi"
    }
    console.log(newcitycollection)
    console.log(`${newcitycollection.first} ${newcitycollection.second} ${newcitycollection.third}`)
}

citycolllection({first:"kolkata", second:"mumbai"})

// function addressMaker(address) {
//     const {city, state} = address;
    
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };
//     console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
// }

// addressMaker({city: 'Austin', state: 'Texas'});