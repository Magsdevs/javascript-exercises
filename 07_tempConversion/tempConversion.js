const convertToCelsius = function (tempF) {
  let temp = (tempF - 32) * (5 / 9);
  return naiveRound(temp, 1);
};

const convertToFahrenheit = function (tempC) {
  let temp = tempC * (9 / 5) + 32;
  return naiveRound(temp, 1);
};

function naiveRound(num, decimalPlaces) {
  let p = Math.pow(10, decimalPlaces);
  return Math.round(num * p) / p;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

console.log(convertToFahrenheit(29));

console.log(convertToCelsius(100));
