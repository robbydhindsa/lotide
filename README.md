# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @robbydhindsa/lotide`

**Require it:**

`const _ = require('@robbydhindsa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: takes in two arrays as parameters and uses `eqArrays` function to validate if the two arrays are equal to each other 
* `assertEqual(actual, expected)`: takes in two values as parameters and validates if the two values are equal to each other (uses '===') 
* `assertObjectsEqual(actual, expected)`: takes in two objects as parameters and uses `eqObjects` and `eqArrays` functions to validate if two objects have the exact same key:value pairs 
* `countLetters(sentence)`: takes in a string as a parameter and counts the number of times each character is used in the provided string 
* `countOnly(allItems, itemsToCount)`: takes in an array of strings (allItems) and an object specifying what to count (itemsToCount); returns the number of occurences of a particular string in allItems parameter
* `eqArrays(array1, array2)`: returns a boolean value based on whether array1 and array2 are exactly equivalent 
* `eqObjects(object1, object2)`: returns a boolean value based on whether object1 and object2 are exactly equivalent
* `findKey(obj, callback)`: takes in an object and a callback function as parameters; returns a particular key of the object, based on the callback function
* `findKeyByValue(obj, val)`: takes in an object and a value as parameters; returns the specific key of the object (obj) that is equal to the value passed (val)
* `head(arr)`: returns the first element of an array
* `letterPositions(sentence)`: returns the index value of a particular character in a string
* `map(array, callback)`: alters the `array` parameter based on the passed callback and returns the result
* `middle(arr)`: returns the middle element(s) of an array
* `tail(arr)`: returns all the elements of an array except for index 0
* `takeUntil(array, callback)`: returns the elements of an array until the value of the callback is equivalent to an array, at which point it stops and returns that specific portion of the array
* `without(source, itemsToRemove)`: removes specific elements of the array that is passed and returns the resulting array