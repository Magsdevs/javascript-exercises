const add = function () {
  let sum = [...arguments].reduce((initial, total) => initial + total);
  return sum;
};

const subtract = function () {
  let subtract = [...arguments].reduce((initial, total) => initial - total);
  return subtract;
};

const sum = function () {
  return [...arguments].flat().reduce((initial, total) => initial + total, 0);
};

const multiply = function () {
  let args = [...arguments];
  return args
    .flat()
    .reduce((previousValue, currentValue) => previousValue * currentValue);
};

const power = function () {
  let args = [...arguments];
  return args.reduce((previousValue, currentValue) =>
    Math.pow(previousValue, currentValue)
  );
};

const factorial = function () {
  let [num] = [...arguments];
  let total = 1;

  for (let i = total; i <= num; i++) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
