//1
function example1(){
    var a=10;
}
console.log(a); //what is the output?
//Is it 10?

//2
function example2(){
    var b=20;
    function innerFunction(){
        return b;
    }
    return innerFunction;
}
let output=example2();
console.log(output); //what is the output?
//Is it 20?