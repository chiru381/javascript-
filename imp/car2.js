let cars = [
  { name: "black car" },
  { name: "grey car" },
  { name: "orange car" },
];

//replace black car -> white car
console.log(cars.splice(0, 1, { name: "white car" }));
console.log(cars);
