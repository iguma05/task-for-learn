/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    const promise_one = fn(...args);
    const promise_two = new Promise((_, rej) =>
      setTimeout(() => rej("Time Limit Exceeded"), t)
    );
    return Promise.race([promise_one, promise_two]);
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 50));
  return n * n;
};
const t = 100;
const inputs = [5];

const s = timeLimit(fn, t)(5);

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
