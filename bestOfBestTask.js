const getTree = () => [
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

const myFunction = () = {
  const data = getTree();
  
}