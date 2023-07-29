// 1-ый вариант
var value = 2;
function showValue() {
  console.log(value); // 2
}

function wrapper() {
  var value = 3;
  console.log(value); // 3
  showValue();
}
// ============================

// 2-ой способ
var value = 2;
function showValue() {
  console.log(value); // 2
}

function wrapper() {
  console.log(value); // undefined
  var value = 3;
  showValue();
}
//===============================

wrapper();
