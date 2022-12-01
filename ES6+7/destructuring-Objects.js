let bio = {
    myname: "suman",
    surname: "paik",
    age: 18,
    scooling: {
        schoolName: "kalinagar high school",
        collegeName: "midnapore college (autonomous)"
    }
    
}

const { myname, surname, scooling: {schoolName, collegeName} } = bio
// console.log(${myname})
console.log(bio.myname)
console.log(`${myname} ${schoolName}`)


let h = "suman paik"
let h1 = "frontend developer"
let u = `${h1}` 
// console.log(`${h} ${h1}`)
console.log(u)