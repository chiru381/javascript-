let object = {
    name: 'Javascript',
    value:100
};
let subObject = { name: 'JS Startup'};
let merge = { ...object, ...subObject};
console.log(merge['name']);
console.log(merge['value']);