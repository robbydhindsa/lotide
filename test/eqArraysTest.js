const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
console.log("This result should be true: " + eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log("This result should be false: " + eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log("This result should be true: " + eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log("This result should be false: " + eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
