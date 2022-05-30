let products = [
    {
        name: 'mobile',
        price: 2000
    },
    {
        name: 'laptop',
        price: 40000
    },
    {
        name: 'light',
        price: 890
    }
];

let res = products.sort((a, b) => {
    return b.price - a.price
});

console.log(res);