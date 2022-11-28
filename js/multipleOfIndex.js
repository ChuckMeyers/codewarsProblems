// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Solution 

const multipleOfIndex = array => array.filter((num, ind) => num % ind === 0);