
//=================================================
console.log('==== Spred Operator ===')
let array = [1, 2, 3, 4, 5]
console.log(...array)
console.log('==== Maximum Number ====')
console.log(Math.max(...array))
console.log('==== Minimum Number ====')
console.log(Math.min(...array))

//=================================================
console.log('==== string ===')
let str = "hello world"
let s =[...str]
console.log(...str)

//=================================================
console.log('==== Coping Array ===')
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];
console.log(copyArray); // Output: [1, 2, 3]


//=================================================
console.log('==== concatenating Array ===')

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

//=================================================
console.log('==== Passimg Array as an argument ===')
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

//=================================================

console.log('==== Adding array to the element ===')
const originaArray = [1, 2, 3];
const newArray = [...originaArray, 4, 5];
console.log(newArray); // Output: [1, 2, 3, 4, 5]

//=================================================
console.log('==== Converting Array-like Objects to Arrays ===')

const nodeList = document.querySelectorAll('div,p');
const divArray = [...nodeList];
console.log(divArray)