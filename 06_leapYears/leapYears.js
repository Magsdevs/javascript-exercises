const leapYears = function (year) {
  let leapYears = '';
  if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
    leapYears = true;
  } else {
    leapYears = false;
  }
  return leapYears;
};
console.log(leapYears(1996));
// Do not edit below this line
module.exports = leapYears;

console.log(1900 % 400);
