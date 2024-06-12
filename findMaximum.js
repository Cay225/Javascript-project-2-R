function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}
const arr = [3, 5, 1, 9, 2];
console.log(findMaximum(arr));  // Output: 9
console.log(findMinimum(arr));  // Output: 1
