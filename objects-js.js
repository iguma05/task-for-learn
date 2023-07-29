const obj1 = { a: 2 };
const obj2 = { b: 2 };
const obj3 = {
  [obj1]: 2,
  [obj2]: 5,
};
console.log(obj3[obj1]);

Object.defineProperty(obj3, "string", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj3, "string"));

Object.defineProperty(obj3, "string", {
  value: 12,
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj3, "string"));
Object.defineProperty(obj3, "string", {
  value: 15,
  writable: false,
  enumerable: true,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj3, "string"));

const obj1 = { a: 2 };
const obj2 = { b: 2 };
const obj3 = {
  [obj1]: 2,
  [obj2]: 5,
};
console.log(obj3[obj1]);

Object.defineProperty(obj3, "string", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj3, "string"));

Object.defineProperty(obj3, "string", {
  value: 12,
  writable: false,
  enumerable: false,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj3, "string"));
Object.defineProperty(obj3, "string", {
  value: 15,
  writable: false,
  enumerable: true,
  configurable: true,
});
console.log(Object.getOwnPropertyDescriptor(obj3, "string"));

let obj4 = { a: 1 };

const name = new WeakMap();
name.set(obj4, "2");
obj4 = null;
console.log(name.get(obj4));

const array = [1, 2, 3];
const obj5 = { a: 1, b: 2 };
const map = new Map(Object.entries(array));

console.log(Object.fromEntries(map));

const newSet = new Set(array);
console.log(newSet.entries());

//=====================================
function add(a = 0) {
  let sum = a;
  return function (b) {
    return !b ? add(sum) : sum + b;
  };
  return sum;
}
console.log(add(9)()); // 9
console.log(add(9)(10)); //19
console.log(add()()()()); // 0
console.log(Number(null));
//========================================
console.log("1" == true);
const newObj = new Object();
console.log(newObj.__proto__ === Object.prototype);
//=============================================================
// Написать полифил на Promise.all

// function promiseAll(promises) {
//     return new Promise((resolve, reject) => {
//         let count = 0;
//         const newArray = [];
//         promises.forEach((promise, i) => {
//             promise.then(res => {
//                 count++;
//                 newArray[i] = res;
//                 if(count === promises.length) {
//                     resolve(newArray)
//                 }
//             }).catch(reject)
//         })
//         // resolve(newArray);
//     })

// }

// const firstPromise = new Promise((resolve, reject) =>
//   setTimeout(() => reject(300), 300)
// );

// const secondPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(200), 200)
// );

// const thirdPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(100), 100)
// );

// promiseAll([firstPromise, secondPromise, thirdPromise])
//     .then(console.log); // [300, 200, 100]

// ========================================================

// Написать функцию, которая будет переделывать номер телефона
// +7 (123) 23-45-46 => 7123234546

// const tel = "+7 (123) 23-45-46";

// function filterPhone(phone) {
//     return phone.replace(/\D/g, '');
// }
// console.log(filterPhone(tel));

// =======================================================

// задача на ивент луп

// const mockRequestTimer = () =>
//     new Promise((res) => {
//         console.log('Promise');
//         setTimeout(() => {
//             console.log("timer resolve");

//             res("data without timer");
//         }, 0);
//     });

// const asyncFunc = async () => {
//     console.log("check 01");

//     const timerResult = await mockRequestTimer();

//     console.log("check 02");
//     console.log("timerResult", timerResult);

// };

// console.log("prepare");

// asyncFunc();

// console.log("after");

// prepare
// check 01
// Promise
// after
// timer resolve
// check 02
// timerResult _  data without timer

// ================================================

// this

// 'use strict';

// const object = {
//   who: 'World',
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//   },
// };

// console.log(object.greet()); // Hello, World
// console.log(object.farewell()); // undefined

// =================================================

// this

// 'use strict';

// const object = {
//   message: 'Hello, World!',
// };

// function logMessage() {
//   console.log(this.message);
// }

// logMessage(); // Error

// ==================================================

// promise chain

Promise.reject("a")
  .catch((p) => {
    throw p + "b";
  })
  .catch((p) => p + "c")
  .then((p) => p + "d")
  .then((p) => console.log(p)); // abcd
//==================================================
var f = function () {
  this.x = 5;
  (function () {
    this.x = 3;
  })();
  console.log(this.x);
};

var obj = {
  x: 4,
  m: function () {
    console.log(this.x);
  },
};
f(); // undefined
new f(); // 3
obj.m(); // 4
new obj.m(); // 4
f.call(f); // 5
obj.m.call(f); // 5
