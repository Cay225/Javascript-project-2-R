function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const arr = [3, 10, 19, 12, 5];
console.log(sumArray(arr));  // Output: 49
