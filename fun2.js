function addItemQty(...args){
    return args.reduce((sum, val)=> sum + val);
}
let totalQty = addItemQty(1,2);
let totalItem = addItemQty(2,3,4);
console.log(totalQty);
console.log(totalItem);