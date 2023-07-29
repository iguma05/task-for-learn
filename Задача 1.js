// const chunk = (arr, num) => {
//   const newArr = [];
//   let chunk1 = [];
//   for (let i = 0; i < arr.length; i += num) {
//     for (let j = i; j < num; j++) {
//       if (arr[j]) chunk1.push(arr[j]);
//     }
//     newArr.push(chunk1);
//     chunk1 = [];
//   }
//   return newArr;
// };

function chunk(arr, num) {
  const result = [];

  while (arr.length) {
    result.push(arr.slice(0, num));
    arr.splice(0, num);
  }

  return result;
}

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(2 * "aa");
