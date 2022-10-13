// Build a function that returns an array of integers from n to 1 where n>0.

//solution

const reverseSeq = n => {
    let numsArr = [];
    for(let i = n; i > 0; i--) {
      numsArr.push(i);
    }
    return numsArr;
  };