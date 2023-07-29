// var curry = function (fn) {
//   return function curried() {
//     for (let i = 0; i < arguments.length; i++) {
//       const fn_1 = () => fn(...arguments);
//       console.log(...arguments);
//       return function () {
//         const fn_2 = () => fn(...arguments);
//         console.log(...arguments);
//         return function () {
//           const fn_3 = () => fn(...arguments);
//           console.log(...arguments);
//           const sum = fn_1() + fn_2() + fn_3();
//           console.log(sum);
//           return sum;
//         };
//       };
//     }
//   };
// };

/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  return function curried(...args) {
    if (fn.length === [...args].length) return fn(...args);
    return function (...newArgs) {
      return curried(...args, ...newArgs);
    };
  };
};

function sum(a, b, c) {
  return a + b + c;
}
console.log(curry(sum)(1)(2)(3));
console.log(curry(sum)(1, 2)(3));
console.log(curry(sum)()()(1, 2, 3));
