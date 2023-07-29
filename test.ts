type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    return functions.reduce((res, fn) => {
      res = 0;
      x = fn(x);
      return (res = x);
    }, 0);
  };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
