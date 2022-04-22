
var string="hello how are you doing, I wish you all happy rakshabandhan";

// var count=0;

// for(var i=0;i<string.length;i++){
//    if(string[i] === 'd'){
//       count++;
//    }
// }
// console.log(count);
var pattern=/e/g;
console.log(string.match(pattern).length);


var mystr="digitallync is in hyderabad. we have digitallync in malysia also. digitallync is in 2nd floor";

console.log(mystr.replace(/digitallync/g,'DIGITALLYNC'));


