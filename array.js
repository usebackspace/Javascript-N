// === push() method ===
console.log('========= push() =============')

let fruits = ['apple', 'banana'];
console.log(fruits)
fruits.push('orange', 'grape');
console.log(fruits)

console.log('========= pop() ============')

// === pop() method ===

let fruit = ['apple', 'banana', 'orange'];
console.log(fruit)
let lastFruit = fruit.pop();
console.log(lastFruit)
console.log(fruit)

console.log('========= unshift() =========')

// === unshift() method ===

let frui = ['banana', 'orange'];
console.log(frui)
frui.unshift('apple', 'grape');
console.log(frui)

console.log('============ shift() =========')

// === shift() ===

let fru = ['apple', 'banana', 'orange'];
console.log(fru)
let firstFruit = fru.shift();
console.log(firstFruit)
console.log(fru)

console.log('========= concat() =========')

// === concat() method ===
let fruits1 = ['apple', 'banana'];
console.log(fruits1)
let fruits2 = ['orange', 'grape'];
console.log(fruits2)
let allFruits = fruits1.concat(fruits2);
console.log(allFruits)

console.log('========= slice() =========')

// === slice() method ===

let fr = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let slicedFruits = fr.slice(1, 4);
let slicedFruits1 = fr.slice(2); //start from index 2
console.log(slicedFruits)
console.log(slicedFruits1)

console.log('========= splice() =========')

// === splice() method ===

let f = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
f.splice(2, 1, 'mango', 'peach')
console.log(f)


console.log('========= for loop ========')

// === for loop ==

let fruitss = ['apple', 'banana', 'orange', 'grape'];

// Using a for loop to iterate over the array
console.log('========= loop 1 ========')
for (let i = 0; i < fruitss.length; i++) {
    console.log(fruitss[i]);
}

console.log('========= loop 2 ========')

for (let fruit of fruitss) {
    console.log(fruit);
}

console.log('========= loop 3 ========')

fruitss.sort().reverse()
for (let fruit of fruitss) {
    console.log(fruit);
}