//Math.max(1, 2, 3) -> 3
let numbers = [1, 2, 3];
//console.log(Math.max(1, 2, 3));
//which one from call, apply, bind will be helpful here?
console.log(Math.max.apply(null, numbers));

function sample(name){
    console.log("sample", name);
}

sample.apply("null", ["chiru"]);