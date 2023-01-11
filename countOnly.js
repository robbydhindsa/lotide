// assertEqual FUNCTION
const greenEmoji = String.fromCodePoint(0x12705);
const redEmoji = String.fromCodePoint(0x1274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

// countOnly FUNCTION

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
