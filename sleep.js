/**
 * @param {number} millis
 */
async function sleep(millis) {
  let t = Date.now();
  return new Promise((res, rej) => {
    setTimeout(() => res(console.log(Date.now() - t)), millis);
  });
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
 
