// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

// Solution

const getLength = (arr) => arr.length // Return length of arr

const getFirst = (arr) => arr[0] // Return first element

const getLast = (arr) => arr[arr.length-1] // Return last element
    
const pushElement = (arr) => {
    //push el to arr
    var el=1;
    arr.push(el)
    return arr
 }
    
const popElement = (arr) => {
    //pop an element off arr
    arr.pop()
    return arr
  }
    
    
    