const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Mango', 'Orange']

const numbers = [4, 2, 5, 1, 3, 6, 10];

numbers.sort(); // Sorting Without CompareFunction
console.log(numbers); // Output: [1, 2, 3, 4, 5]

numbers.sort((a, b) => a - b); // Ascending order
console.log(numbers); // Output: [1, 2, 3, 4, 5]

numbers.sort((a, b) => b - a); // Descending order
console.log(numbers); // Output: [1, 2, 3, 4, 5]
