/* eslint-disable */
// Отсортируйте нечетные числа так, чтобы четные числа остались на своих местах:

const input1 = [5, 4, 1, 6, 3, 8];
const output = [1, 4, 3, 6, 5, 8];

function sortOddNumbers(input) {
  const odd = input.filter((num) => num % 2 !== 0).sort((a, b) => b - a);
  return input.map((el) => (el % 2 === 0 ? el : odd.pop()));
}

console.log(sortOddNumbers(input1));
