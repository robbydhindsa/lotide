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

// takeUntil FUNCTION   **used maps.js as reference**
const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
};

// TEST CODE

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);

console.log('---');

const data3 = ['Lighthouse', 'is', 'in', 'the', 'house'];
const results3 = takeUntil(data3, x => x === 'house');
console.log(results3);
assertArraysEqual(takeUntil(data3, x => x === 'house'), ['Lighthouse', 'is', 'in', 'the']);
