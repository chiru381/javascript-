//function execution types

function foo(){
    console.log("hello");
}

console.log(foo());

var obj = {};

obj.foo = function(){
    console.log("hello...");
}
console.log(obj.foo());
console.log(new foo());