//array spreading
const numbers=[1,2,3,4];
console.log(numbers);
function sum(x,y,z,n){
    return x+y+z+n;
}
console.log(sum(...numbers));

//merging two arrays
const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[...arr1,...arr2];
console.log(arr3);
let arr4=[20,30,...arr1, 10];
console.log(arr4);


//object spreading
var name='chiru';
console.log(...name);

let basicDetails={name:'chiru',age:24}
let professionalDetails={profession: 'fullstack'}
let result={...basicDetails, ...professionalDetails, ...{location: 'bangalore'}}
console.log(result);





let numbers=[1,2,3];
function a(x,y,...rest){
    console.log(x,y,rest);
}
a(1,2,3,4);