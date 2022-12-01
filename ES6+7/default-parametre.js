function printMyName(article = "Please put something in it") {   // this is defaul parametre
    console.log(article)
}
// printMyName("this is the first step ") // lets make it default parametre
printMyName()


// second example 

function eatitem(food = "something") {
    console.log(`I'm going to buy ${food} from the grocery shop`)
}
eatitem("milk")  // pass the parametre
eatitem() // don't pass any parametre