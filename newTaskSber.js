// Что выведет данный код? Объясните построчно.

const doSomethingElse = () =>
  new Promise((resolve) => setTimeout(resolve("foo"), 300));

// //1
// Promise.resolve("bar")
//   .then(() => {
//     doSomethingElse();
//   })
//   .then((res) => console.log(res));

// 2
Promise.resolve("bar")
  .then(doSomethingElse)
  .then((res) => console.log(res));

// // 3
// Promise.resolve("bar")
//   .then(doSomethingElse())
//   .then((res) => console.log(res));

// // 4
// Promise.resolve("bar")
//   .then(() => {
//     return doSomethingElse();
//   })
//   .then((res) => console.log(res));

// // 5
// Promise.resolve("bar")
//   .then(null)
//   .then((res) => console.log(res));

// 6. Как создать промис из функции, которая принимает callback (например, setTimeout)?

// 7. Сработает ли обработчик, если мы навесим его уже после того, как промис разрешился?

// 8. В чем разница между promise.then(a).then(b); и promise.then(a); promise.then(b);?
