const sumanData = {
    firstname: "suman",
    lastname: "paik",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
}
console.log(sumanData.fullname())
// output: suman paik

const newData = {
    firstname: "web",
    lastname: "developer"
}


const updateName = sumanData.fullname.bind(newData)
console.log(updateName())
