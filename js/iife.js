//global variable not modify is iife
/* var username='chiru';
var a=(function(username){
    username='raju';
    return username;
})(username);
console.log(a);
console.log(username); */





//global variable modify chestundi

var username='chiru';
function a(){
    username='raju';
}
a();
console.log(username);