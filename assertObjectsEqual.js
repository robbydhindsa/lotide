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

// eqObjects FUNCTION
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  let object1Length = object1Keys.length;
  let object2Length = object2Keys.length;

  if (object1Length !== object2Length) {
    return false;
  } else {
    for (const element of object1Keys) {
      if (Array.isArray(object1[element]) === true && Array.isArray(object2[element]) === true) {
        return eqArrays(object1[element], object2[element]);
      } else if (object1[element] === object2[element]) {
        return true;
      } else if (object1[element] !== object2[element]) {
        return false;
      }
    }
  }
};

// assertObjectsEqual FUNCTION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // import the 'util' library

  if (eqObjects(actual, expected) === true) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertObjectsEqual(shirtObject, anotherShirtObject); // => should PASS
assertObjectsEqual(shirtObject, longSleeveShirtObject); // => should FAIL
