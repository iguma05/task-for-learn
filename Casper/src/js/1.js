// Написать функцию add, которая принимает число
// и может вызываться бесконечное число раз,
// пока не будет вызвана без аргументов - тогда возвращается сумма переданных
// ранее чисел:

// console.log( add(9)(10)() ); // 19
// console.log( add(9)() ); // 9 +
// console.log( add() ); // 0 +

// function add(num){
//   console.log(num)
//   if(num === undefined) return 0;
//   let sum = num;
//   return function(num2){
//     console.log(num2);
//     if(num2 !== undefined) return add(sum+num2);
//     return sum;
//   }
// }
