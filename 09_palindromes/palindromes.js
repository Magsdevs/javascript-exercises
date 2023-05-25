const palindromes = function (str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join('');
  return reverseStr === lowRegStr;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'));
// Do not edit below this line
module.exports = palindromes;
