var foo = { n: 1 };
var bar = foo;
// console.log(foo);
foo.x = foo = { n: 2 };
// console.log(foo);
// console.log(foo.x);
const foo1 = { ...foo, x: 1 };
// console.log(foo1);
