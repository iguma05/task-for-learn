// // написать функцию-полифилл promiseAll
// function myPromiseAll(promises) {
//   let resPromises = [];
//   let countOfPromises = 0;
//   return new Promise((resolve, reject) => {
//     if (!promises.length) {
//       resolve(resPromises);
//     } else {
//       promises.forEach((el, i) => {
//         el.then(
//           (res) => {
//             resPromises[i] = res;
//             countOfPromises++;
//             if (countOfPromises === promises.length) {
//               resolve(resPromises);
//             }
//           },
//           (rej) => {
//             reject(rej);
//           }
//         );
//       });
//     }
//   });
// }

// const p1 = Promise.resolve("first");
// const p2 = new Promise((resolve) => setTimeout(resolve, 1000, "second"));
// const p3 = Promise.resolve("third");
// const p4 = Promise.reject("err");

// myPromiseAll([p1, p2, p3, p4]).then(console.log).catch(console.log);
// Promise.all([p1, p2, p3, p4]).then(console.log).catch(console.log);
// //================================================================
// // Написать полифил на Promise.all
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const newArray = [];
    promises.forEach((promise, i) => {
      promise
        .then((res) => {
          count++;
          newArray[i] = res;
          if (count === promises.length) {
            resolve(newArray);
          }
        })
        .catch(reject);
    });
    // resolve(newArray);
  });
}

// const firstPromise = new Promise((resolve, reject) =>
//   setTimeout(() => reject(300), 300)
// );

// const secondPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(200), 200)
// );

// const thirdPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(100), 100)
// );

// promiseAll([firstPromise, secondPromise, thirdPromise]).then(console.log); // [300, 200, 100]

// // ========================================================

// Promise.resolve("a")
//   .then((a) => a + "b")
//   .then((res) => res)
//   .catch((e) => e + "d")
//   .catch((e) => e);

// console.log();
