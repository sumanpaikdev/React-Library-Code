let name = "suman"
console.log(name.padStart(10,"A"))   // " AAAAAsuman "
console.log(name.padStart(10,"A").length)  // total length is " 10 "

console.log(name.padEnd(10,"A"))   // " sumanAAAAA "
console.log(name.padEnd(10,"A").length)   // " total length is " 10"

let myname = "thisIsThe/PadStart/AndThe/PadEnd/"
console.log(myname.length)  // length is 33
console.log(myname.padStart(66))
console.log(myname.padStart(22)) // that does not work because of the original string length is grater than the last length that we provide,22