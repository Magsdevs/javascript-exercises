const sumAll = function (num1, num2) {
  let finalNum = 0;
  let areArgPositive = num1 > 0 && num2 > 0;
  let isFirstArgGreaterThanSecondArg = num1 > num2;
  let areTypeArgNumbers = typeof num1 === 'number' && typeof num2 === 'number';

  if (areArgPositive && isFirstArgGreaterThanSecondArg && areTypeArgNumbers) {
    for (let i = num1; i >= num2; i--) {
      finalNum += i;
    }
  } else if (areArgPositive && areTypeArgNumbers) {
    for (let i = num1; i <= num2; i++) {
      finalNum += i;
    }
  } else {
    finalNum = 'ERROR';
  }
  return finalNum;
};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
