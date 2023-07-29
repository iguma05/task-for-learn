const getTree = [
  {
    id: 3,
    parentId: 1,
    name: "Banana",
  },
  {
    id: 5,
    parentId: 1,
    name: "Apple",
  },
  {
    id: 6,
    parentId: 5,
    name: "Red apple",
  },
  {
    id: 1,
    parentId: null,
    name: "Fruit",
  },
  {
    id: 2,
    parentId: null,
    name: "Vegetable",
  },
];

function myFn() {
  const parents = getTree.filter((item) => item.parentId === null);
  const children = [];
  for (let i = 0; i < getTree.length; i++) {
    for (let j = 0; j < parents.length; j++) {
      parents[j] = {
        ...parents[j],
        childs: getTree[i].parentId === parents[j].id ? getTree[i] : null,
      };
    }
    return parents;
  }
}
console.log(myFn());
