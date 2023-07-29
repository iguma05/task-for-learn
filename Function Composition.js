/**
 * @param {Function[]} functions
 * @return {Function}
 */

function compose(functions) {
    return function (x) {
      return functions.reverse().reduce((res, fn) => {
        res = 0;
        x = fn(x);
        return (res = x);
      }, 0);
    };
  }

const fn = compose([x => x + 1, x => 2 * x])
 console.log(fn(2)) // 9
 