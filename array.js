// =================== push() method ===================
console.log('========= push() =============')

let fruits = ['apple', 'banana'];
console.log(fruits)
fruits.push('orange', 'grape');
console.log(fruits)


// =================== pop() method ===================
console.log('========= pop() ============')

let fruit = ['apple', 'banana', 'orange'];
console.log(fruit)
let lastFruit = fruit.pop();
console.log(lastFruit)
console.log(fruit)


// =================== unshift() method ===================
console.log('========= unshift() =========')

let fruit_unsifht = ['banana', 'orange'];
console.log(fruit_unsifht)
fruit_unsifht.unshift('apple', 'grape');
console.log(fruit_unsifht)


// =================== shift() ===================
console.log('============ shift() =========')

let fruit_shift = ['apple', 'banana', 'orange'];
console.log(fruit_shift)
let firstFruit = fruit_shift.shift();
console.log(firstFruit)
console.log(fruit_shift)


// ===================== length ====================
console.log('============ length property=========')

let fruit_length = ['apple', 'banana', 'mango', 'orange']
console.log(fruit_length.length)

fruit_length.length = 2   // Truncating the array
console.log(fruit_length)

fruit_length.length = 6  // Expanding the array
console.log(fruit_length)


// =================== indexOf() method ===================
console.log('========= indexOf() =========')

let fruit_indexof = ['apple', 'banana', 'mango','orange','stawberry', 'banana',9]
console.log('index of banana: ',fruit_indexof.indexOf('banana'))
console.log('index of banana after 2 index:',fruit_indexof.indexOf('banana',2))
console.log('index of digit 9: ', fruit_indexof.indexOf(9))


// =================== concat() method ===================
console.log('========= concat() =========')

let fruits1 = ['apple', 'banana'];
console.log(fruits1)
let fruits2 = ['orange', 'grape'];
console.log(fruits2)
let allFruits = fruits1.concat(fruits2);
console.log(allFruits)


// =================== slice() method ===================
console.log('========= slice() =========')

let fruit_slice = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
let slicedFruits = fruit_slice.slice(1, 4);
let slicedFruits1 = fruit_slice.slice(2); //start from index 2
console.log(slicedFruits)
console.log(slicedFruits1)


// =================== splice() method ===================
console.log('========= splice() =========')

let fruit_splice = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
fruit_splice.splice(2, 1, 'mango', 'peach')
console.log(fruit_splice)



// =================== for loop ==================
console.log('========= for loop ========')

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