// FUNCTION IMPLEMENTATION
const greenEmoji = String.fromCodePoint(0x12705);
const redEmoji = String.fromCodePoint(0x1274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
