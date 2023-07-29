const arr = Array(10).fill({});
for (let i = 0; i < arr.length; i++) {
  // arr[i]["id"] = i;
  arr[i] = { id: i }; //правильное решение
}
console.log(arr);
