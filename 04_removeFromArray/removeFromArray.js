const removeFromArray = function (arr) {
  let args = Array.from(arguments);
  return arr.slice().filter((val) => {
    if (!args.includes(val)) {
      return val;
    }
  });
};
console.log(removeFromArray([1, 2, 3], '1', 3));
// Do not edit below this line
module.exports = removeFromArray;
