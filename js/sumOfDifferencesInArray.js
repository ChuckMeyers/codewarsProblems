// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Solution

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}