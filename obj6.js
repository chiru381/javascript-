let obj = {
    first: "Javascript",
    fullName: function(){
        return `${this.first} ${this.last}`;
    }
}
let object = { first: "JS", last: "Startup"}

let fullName = obj.fullName;
console.log(fullName.call(object));