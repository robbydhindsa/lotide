const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

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