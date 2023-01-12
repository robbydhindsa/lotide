// assertEqual FUNCTION
const greenEmoji = String.fromCodePoint(0x12705);
const redEmoji = String.fromCodePoint(0x1274C);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${greenEmoji}${greenEmoji}${greenEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`${redEmoji}${redEmoji}${redEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

// countLetters FUNCTION
const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  delete results[' '];
  return results;
};

// TEST CODE
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHL"));

assertEqual(countLetters("lighthouse in the house")["h"], 4);
assertEqual(countLetters("LHL")["L"], 2);
