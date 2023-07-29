Array.prototype.some = function (callback) {
  return !!Array.from(this).filter((item) => callback(item)).length;
};

console.log([(1, 2, 3, 5, 7, 8, 10, 13, 14)].some((el) => el > 10)); // true
console.log([(1, 2, 3, 5, 7, 8)].some((el) => el > 10)); // false

// let arr = [1, 2 ,3]
// arr[5] = 10
// console.log(arr)

console.log([1, 2, 3, 5, 7, 8, 10, 13, 14].some((el) => el > 10)); // true
console.log([1, 2, 3, 5, 7, 8].some((el) => el > 10)); // false
// console.log(arr.some((el) => el > 10)) // true
