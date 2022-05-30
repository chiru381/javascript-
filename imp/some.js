let persons = [
  {
    name: "raju",
    age: 23,
  },
  {
    name: "ramana",
    age: 34,
  },
  {
    name: "anand",
    age: 17,
  },
];

let res = persons.some(isAdult);

function isAdult(person) {
  return person.age < 17;
}
console.log(res);
console.log(persons);
