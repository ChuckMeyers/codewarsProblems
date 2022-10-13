// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//solution

function filter_list(l) {
    let numArr = [];
    for(let i = 0; i < l.length; i++) {
      if(Number.isInteger(l[i])) {
        numArr.push(l[i]);
      }
    }
    return numArr;
  }