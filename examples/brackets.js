/*[abc]: a or b or c */


var string="hello";

var string1="hello hey sma smr sck";

var pattern=/s[mnc]k/;

//console.log(string.match(pattern));

console.log(pattern.test(string1));

//[ABC]:

var string="helloa";


var pattern=/[ABE]/;

//console.log(string.match(pattern));

console.log(pattern.test(string));


//[^uppercase]:

var string="ABE ";


var pattern=/[^ABE]/;

//console.log(string.match(pattern));

console.log(pattern.test(string));


var string="ABE8";

//[0-9]:


var pattern=/[^0-9]/;

//console.log(string.match(pattern));
0
console.log(pattern.test(string));

