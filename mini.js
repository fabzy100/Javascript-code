function findMax(arr) {
    // Using Math.max with spread operator to find maximum value in array
    return Math.max(...arr);
}

function findMin(arr) {
    // Using Math.min with spread operator to find minimum value in array
    return Math.min(...arr);
}


let numbers = [3, 1, 7, 4, 9, 2];
let max = findMax(numbers);
let min = findMin(numbers);

console.log("Max:", max); // Output: 9
console.log("Min:", min); // Output: 1
