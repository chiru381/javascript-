
var password="abcA1def1";

var pattern=/[A-Z]+[a-z]+[0-9]+/; 
//console.log(string.match(pattern));

console.log(pattern.test(password));

n*  - optional 

var password="abc1def";

var pattern=/[a-z]+[A-Z]*/; 
//console.log(string.match(pattern));

console.log(pattern.test(password));

//n? : matches any string that contains zero or 1 occurances. 
