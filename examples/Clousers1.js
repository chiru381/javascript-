//function expressions
let one=function(){
    return 1;
}
console.log(one);
console.log(one());





//Nested functions
function parent(){
    function child1(){
        function child2(){
            console.log("Hello...");
        }
    }
}