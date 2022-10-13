//Write a function that returns both the minimum and maximum number of the given list/array.

// Solution

  function minMax(arr){
    let sort = arr.sort((a,b) => a-b);
    let newArr = [];
    newArr.push(sort[0]);
    newArr.push(sort[sort.length - 1]);
    return newArr;
  }