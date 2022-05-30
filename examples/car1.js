let cars = [
  { name: "black car" },
  { name: "grey car" },
  { name: "orange car" },
];
const insert = (cars, index, newItem) => {
  cars.slice(0, index), newItem, cars.slice(index);
};
const result = insert(cars, 1, { name: "white car" });
console.log(result);
console.log("by using slice we can add white car in second place");
