// eqArrays FUNCTION
const eqArrays = function(arr1, arr2) {
  let boolValues = [];
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        boolValues.push(true);
      } else boolValues.push(false);
    }
  } else return false;

  if (boolValues.includes(false)) {
    return false;
  } else return true;
};

// FUNCTION IMPLEMENTATION
const greenEmoji = String.fromCodePoint(0x12705);
const redEmoji = String.fromCodePoint(0x1274C);

// assertArraysEqual FUNCTION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
};

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

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

/*
console.log("result should be []: " + middle([1])); // => []
console.log("result should be []: " + middle([1, 2])); // => []

console.log("result should be [2]: " + middle([1, 2, 3])); // => [2]
console.log("result should be [3]: " + middle([1, 2, 3, 4, 5])); // => [3]

console.log("result should be [2, 3]: " + middle([1, 2, 3, 4])); // => [2, 3]
console.log("result should be [3, 4]: " + middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
*/