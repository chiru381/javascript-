/* JavaScript Engine has 2 phases while running the code.
   i.Memory Allocation
   ii.Execution using CallStack
*/
// debugger;
console.log(a);
d();
var a = 'A';
let b = 'B';
const c = 'C';
function d() {
	console.log('D');
}
e();
var e = () => {
	console.log('E');
};
