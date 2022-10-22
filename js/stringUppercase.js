// Create a method to see whether the string is ALL CAPS.

// Solution

String.prototype.isUpperCase = function() {
    let str = this
    let control = this.toUpperCase();
    
    return str == control
  }