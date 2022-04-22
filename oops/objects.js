//object literal
/* let mobile = {username: "chiru"};

console.log(mobile);
console.log(typeof mobile); */



//Object.create()
/* let mobile = Object.create({});
mobile.username = "chiru";

console.log(mobile);
console.log(typeof mobile);  */



//functions are objects in js
function Mobile() {
    return "mobile";
}
let mobile = new Mobile();
mobile.username = "raju";
/* mobile["username"] = "ramana"; */

console.log(mobile);
console.log(typeof mobile);






//using classes
