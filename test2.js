function collapseStones(array) {
  let sortedArr = array.sort((a, b) => a - b);
  let res = sortedArr.reduce((acc, item) => {
    acc = acc - item;
    return acc;
  });
  return res;
}

console.log(collapseStones([9, 2, 6, 4, 3, 2, 6, 9, 6, 5, 3, 9]));
