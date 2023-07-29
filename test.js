const operations = [
  { date: "2017-07-31" },
  { date: "2017-06-30" },
  { date: "2017-08-31" },
  { date: "2018-03-31" },
  { date: "2017-10-31" },
  { date: "2018-02-28" },
];

// function sortOperations(arr) {
//   const res = {};
//   const newArr = arr.map((el) => ({
//     date: `${new Date(el.date).getMonth()} - ${new Date(el.date).getDate()}`,
//     year: new Date(el.date).getFullYear(),
//   }));
//   for (const el of newArr) {
//     res[el.year] = res[el.year] || [];
//     res[el.year].push(el.date);
//   }
//   return res;
// }

function sortOperations(arr) {
  const res = {};
  for (const el of arr) {
    let year = new Date(el.date).getFullYear();
    let date = `${new Date(el.date).getMonth()} - ${new Date(
      el.date
    ).getDate()}`;
    res[year] = res[year] || [];
    res[year].push(date);
  }
  return res;
}
console.log(sortOperations(operations));
