// forEach()
 let numbers = [ 1, 2, 3 ];
 const result = [];
 numbers.forEach((element, index, array) => {
 	element = element + 1;
 	result.push(element);
 });
 console.log(result);
 console.log(numbers);