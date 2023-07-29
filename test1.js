console.log(1);

setTimeout(() => {
  console.log(2);
});

// requestAnimationFrame(() => {
//   console.log(6);
// });

new Promise((res) => {
  console.log(3);
  res();
}).then(() => {
  console.log(5);
  queueMicrotask(() => {
    console.log(7);
  });
});

console.log(4);

// 1 - 3 - 4 - 5 - 7 - 6 - 2
