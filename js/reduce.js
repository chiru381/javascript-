// reduce()
const arr = [ 1, 2, 3, 4, 5 ];
const sum = arr.reduce(function(accumulator, currentValue, currentIndex, sourceArray) {
	return accumulator + currentValue;
}, 10);
// prints 15
console.log(sum);