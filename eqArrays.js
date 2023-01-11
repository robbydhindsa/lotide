// assertEqual FUNCTION
const greenEmoji = String.fromCodePoint(0x12705);
const redEmoji = String.fromCodePoint(0x1274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

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

// TEST CODE
console.log("This result should be true: " + eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log("This result should be false: " + eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log("This result should be true: " + eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log("This result should be false: " + eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
