// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// Solution

const sumDigits = num => Math.abs(num).toString().split('').reduce((a, b) => (+a + +b));

console.log(sumDigits(567845674));