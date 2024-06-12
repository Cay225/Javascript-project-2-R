function fibonacci(n) {
    const sequence = [0, 1];
    while (sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}

// Example usage:
console.log(fibonacci(10));  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
