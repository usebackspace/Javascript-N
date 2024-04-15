
console.log('====Displaying Only Element ====')
const numbers = [1, 2, 3, 4, 5,];

numbers.forEach(function (element) {
  console.log(element);
});

console.log('====2nd Method of Displaying Only Element ====')

x = function (number) {
  console.log(number);
}
numbers.forEach(x)

console.log('====3rd Method of Displaying Only Element ====')

numbers.forEach((number) => {
  console.log(number)
})

console.log('==== Displaying Element with Index ====')
const array = [1, 2, 3, 4, 5];

array.forEach(function(element, index) {
  console.log(`Element at index ${index} is: ${element}`);
});

console.log('=== Doubling The Element ===')

const number = [10, 20, 30, 40, 50]
number.forEach(function (element,index,array) {
  array[index] = element * 2
  console.log(array[index])
})

const fruits=['apple','orange','banana','MANGO','CHERRY']
fruits.forEach((element, index, arary) => {
  console.log('==== To Lower Case ====')
  arary[index] = element.toLowerCase()
  console.log(arary[index])
  
  console.log('==== To Upper Case ====')
  arary[index] = element.toUpperCase()
  console.log(arary[index])
})