function filterArray(arr, condition) {
    return arr.filter(condition);
}

const arr = [4, 5, 3, 7, 23];
console.log(filterArray(arr, x => x % 3 === 0));  // Output: [3]
