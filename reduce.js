const number = [1, 2, 3, 4, 5]
console.log('===== Reduce Function Without Intial Value ====')
const sum = number.reduce(function (acc, element) {
    return acc + element
})

console.log(sum)

const num = [1, 2, 3, 4, 5]
console.log('===== Reduce Function With Intial Value ====')
const sum1 = num.reduce(function (acc, element) {
    return acc + element
},5)

console.log(sum1)

const numbers = [10, 2, 30, 4, 5]
console.log('===== Reduce To Fund Minimum Value ====')
const max = numbers.reduce(function ( element) {
    return Math.max(element)
})

console.log(max)

console.log('===== Reduce To Find Maximum Value ====')
const min = numbers.reduce(function (acc, element) {
    return Math.min(acc,element)
})

console.log(min)

