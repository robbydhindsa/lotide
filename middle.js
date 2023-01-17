// middle FUNCTION
const middle = function(arr) {
  let midArray = [];
  if (arr.length <= 2) {
    // DO NOTHING
  } else if (arr.length % 2 === 0) {
    let lowMiddle = (arr.length / 2) - 1;
    let highMiddle = arr.length / 2;
    midArray.push(arr[lowMiddle]);
    midArray.push(arr[highMiddle]);
  } else if (arr.length % 2 !== 0) {
    let actualMiddle = Math.floor(arr.length / 2);
    midArray.push(arr[actualMiddle]);
  }
  return midArray;
};

module.exports = middle;
