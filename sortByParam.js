const data = [
  { id: 1, age: 20, name: "Иван", country: "Russia", registred: true },
  { id: 2, age: 30, name: "Дима", country: "Usa", registred: true },
  { id: 3, age: 25, name: "Леха", country: "Russia", registred: false },
  { id: 4, age: 20, name: "Леха", country: "Usa", registred: false },
  { id: 5, age: 30, name: "Иван", country: "Russia", registred: true },
  { id: 6, age: 50, name: "Леха", country: "Russia", registred: true },
  { id: 7, age: 20, name: "Дима", country: "Usa", registred: false },
];

const helperFnc = function (array, param) {
  if (typeof array[0][param] === "number") {
    return array.sort((a, b) => a[param] - b[param]);
  } else {
    return array.sort((a, b) => (a[param] > b[param] ? 1 : -1));
  }
};
console.log(helperFnc(data, "country"));
