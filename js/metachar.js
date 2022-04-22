
var string=" ";


var pattern=/./;

//console.log(string.match(pattern));

console.log(pattern.test(string));


//\d:  digit 

var string="1abcdef";


var pattern=/\d/;

//console.log(string.match(pattern));

console.log(pattern.test(string));


//\D: Non Digit 

var string="1abcd1ef";


var pattern=/\D.\d/; // 

//console.log(string.match(pattern));

console.log(pattern.test(string));


//\w:

var string="^";


var pattern=/\w/; // uppercase / lowercase / digit / _  

//console.log(string.match(pattern));

console.log(pattern.test(string));


//\W: non word character - special symbols 


var string="A";


var pattern=/\W/; // uppercase / lowercase / digit / _  

//console.log(string.match(pattern));

console.log(pattern.test(string));

//\s:
var username="hell world";

var pattern=/\s/; 
//console.log(string.match(pattern));

console.log(pattern.test(username));

//\S: non white space 

var username=" ";

var pattern=/\S/; 
//console.log(string.match(pattern));

console.log(pattern.test(username));
