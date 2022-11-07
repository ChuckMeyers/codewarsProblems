// Complete the solution so that the function will break up camel casing, using a space between words.

// Solution

function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  }