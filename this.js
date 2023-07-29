"use strict";
const user = {
  name: "Bob",
  funcFunc() {
    return function () {
      console.log(this);
    };
  },
  funcArrow() {
    return () => {
      console.log(this);
    };
  },
  arrowFunc: function () {
    return () => {
      return function () {
        console.log(this);
      };
    };
  },
  arrowArrow: () => {
    return () => {
      console.log(this);
    };
  },
};
//
const user2 = {
  name: "Jim",
  funcFunc: user.funcFunc(),
  funcArrow: user.funcArrow(),
  arrowFunc: user.arrowFunc(),
  arrowArrow: user.arrowArrow(),
};
// вызовы
// user.funcFunc()(); //
// user.funcArrow()(); //
// user.arrowFunc()()(); //
// user.arrowArrow()();
// ========================
// user2.funcFunc(); //Jim
// user2.funcArrow(); //Bob
// user2.arrowFunc();
// user2.arrowArrow();
//
//напишите функцию onlyNumbers, которая возвращает только цифры
const string = " 7 (900) 800 - 00 - 00";
const onlyNumbers = (str) => str.replace(/\D/g, "");

console.log(onlyNumbers(string));
