// 1. Реализовать функцию getMoney для банкомата, выдающего купюры.
// На вход - сумма, на выходе объект с количеством купюр по каждому номиналу.
// При этом банкомат должен выдать минимальное количество банкнот.
// Доступные номиналы: 50, 100, 500, 1000, 5000 р

// Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

// 2. На вход добавляется объект с текущим количеством купюр в банкомате

// Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
// P.S. не забыть модифицировать объект с номиналами.
//========================================================================
//Решение Витька:
const atm = (amount, limits) => {
  const notes = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a);

  const atmHelper = (amount, notes) => {
    if (amount === 0) return {};
    if (!notes.length) return;

    const currentNote = notes[0];
    const notesNeeded = Math.min(
      limits[currentNote],
      Math.floor(amount / currentNote)
    );

    for (let num = notesNeeded; num >= 0; num--) {
      const result = atmHelper(amount - currentNote * num, notes.slice(1));

      if (result) return num ? { ...result, [currentNote]: num } : result;
    }
  };

  return atmHelper(amount, notes);
};

const limits = { 1000: 5, 500: 2, 100: 5, 50: 100, 30: 6 };

console.log(atm(320, limits)); // {30: 4, 100: 2}
console.log(atm(1000, limits)); // {1000: 1}
console.log(atm(230, limits)); // {30: 1, 100: 2}
console.log(atm(200, limits)); // {100: 2}
console.log(atm(150, limits)); // {50: 1, 100: 1}
console.log(atm(120, limits)); // {30: 4}
//========================================================
//Решение Алексея
const getMoney = (sum) => {
  const res = new Map();
  res.set(5000, Math.floor(sum / 5000));
  res.set(1000, Math.floor((sum % 5000) / 1000));
  res.set(500, Math.floor((sum % 1000) / 500));
  res.set(100, Math.floor((sum % 500) / 100));
  res.set(50, Math.floor((sum % 100) / 50));
  return res;
};

console.log(getMoney(6200));
//===============================================
