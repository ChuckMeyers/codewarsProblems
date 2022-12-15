// Write a function that removes the first and last index of a list
// If the list is empty or it's length is less than three return null

// Solution

function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }