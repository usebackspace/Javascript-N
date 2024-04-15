let number = [1, 2, 3, 4, 5]

let double = number.map(function (element,index,array) {
    return Math.pow(element,2)
    
})
console.log(double)

console.log('========================================')

let fruits = ['apple', 'banana', 'mango', 'GRAPES', 'PINEAPPLE', 'ORANGE']

fruit_lower=fruits.map((element) => {
    return element.toLowerCase()
})

console.log(fruit_lower)

console.log('========================================')

fruit_upper=fruits.map((element) => {
    return element.toUpperCase()
})

console.log(fruit_upper)