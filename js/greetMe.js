// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Solution

var greet = function(name) {
    let firstless = name.split('').slice(1).join('').toLowerCase()
    return `Hello ${name[0].toUpperCase()}${firstless}!`;
  };