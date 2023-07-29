const elems = [
  { id: 1, child: [2] },
  { id: 2, child: [3] },
  { id: 3, child: [] },
  { id: 4, child: [5] },
  { id: 5, child: [6] },
  { id: 6, child: [] },
];

// 1
//  L2
//   L3

const getByRole = (number) => {
  if (!number) return;
  const elemOfFind = elems.find((item) => item.child[0] === number);
  return elemOfFind ? getByRole(elemOfFind.id) : number;
};

console.log(getByRole(3)); //1
console.log(getByRole(6)); //4
