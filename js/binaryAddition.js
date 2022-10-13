// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// Solution

function addBinary(a,b) {
    let deciNum = a + b;
    return Number(deciNum).toString(2)
  }