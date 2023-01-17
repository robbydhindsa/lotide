const eqArrays = require('./eqArrays');

// FUNCTION IMPLEMENTATION
const greenEmoji = String.fromCodePoint(0x12705);
const redEmoji = String.fromCodePoint(0x1274C);

// assertArraysEqual FUNCTION
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
}

module.exports = assertArraysEqual;
