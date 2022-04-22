let persons = [
    {
        name: 'raju',
        age: 23
    },
    {
        name: 'ramana',
        age: 34
    },
    {
        name: 'anand',
        age: 17
    }
];

let res = persons.every(person => person.name !== undefined);

console.log(res);
console.log(persons);