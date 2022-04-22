// map()
/*  let result = numbers.map((element) => {
 	element = element + 1;
 	element = element + 2;
 	return element;
 });                            //Higher Order Function
 console.log('modified', result);
 console.log('original', numbers); */







const arr1 = [ 1, 2, 3 ];
// Without HOF

/*  const arr2 = [];
 for (let i = 0; i < arr1.length; i++) {
 	arr2.push(arr1[i] * 2);
 }
console.log(arr2); */

 // prints [ 2, 4, 6 ]






// With HOF
 /* const arr2 = arr1.map((element) => element * 2);
 console.log(arr2); */





//example
const users = [ { name: 'Venkatesh' }, { name: 'Chinni' }, { name: 'Saqib' } ];
// // Create a new array of users by adding profession
// // Without HOF


/*  const output = [];
 for (let i = 0; i < users.length; i++) {
 	users[i].profession = 'Full Stack Developer';
 	output.push(users[i]);
 }
 console.log(output); */





// With HOF
 const output = users.map((user) => {
 	user.profession = 'Full Stack Developer';
 	return user;
 });
 console.log(output);