const repeatString = function (str, num) {
  let newStr = '';
  if (num < 0) {
    return 'ERROR';
  } else {
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
  }

  return newStr;
};

console.log(repeatString('', 2));

// Do not edit below this line
module.exports = repeatString;
