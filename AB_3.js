console.log("start");

setTimeout(() => console.log("timeout"), 0);

new Promise((resolve, reject) => {
  console.log("promise constructor");
  reject();
  console.log("promise constructor2");
})
  .then(() => console.log("promise"))
  .catch(() => console.log("promise1"))
  .catch(() => console.log("promise2"))
  .then(() => console.log("promise3"))
  .then(() => console.log("promise4"));

console.log("final");

// start - promise constructor - final - promise1 - promise3 - promise4 - timeout
