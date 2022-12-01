/*
let numberArr = [2, 4, 6, 7, 9, 1, 8]
// This is how includes works 
console.log(numberArr.includes(9)) // it returns "true" because 9 exists in the array
console.log(numberArr.includes(5)) // it returns "false" bexause 5 does nto exits in the array
*/


// includes method challenge 

/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];

if( listIngredients.includes("chocolate")) {
    console.log("We are going to make a chocolate cake" )
} else {
    console.log("We can't make a chocolate cake because we are missing the ingredient chocolate" );
}