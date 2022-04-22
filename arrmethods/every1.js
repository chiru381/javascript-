let arrays = [
    [2, 3, 4],
    [4, 2, 1],
    [9, 8, 7],
];

let res = arrays.every(arr => Array.isArray(arr));

console.log(res);
console.log(arrays);
