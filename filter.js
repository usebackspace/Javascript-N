number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

odd = number.filter(function (num) {
    return num%2!=0
})

even = number.filter((num) => {
    return num % 2 == 0
})

console.log('==== Odd Number ====')
console.log(odd)

console.log('==== Even Number ====')
console.log(even)

car = ['ferari', 'lamborghini', 'ford', 'porsche', 'Volkswagen', 'Aston Martin']

console.log('=== Car Length Greater than 8 ====')
length_greater = car.filter(function (car) {
    return car.length>=8
})

console.log(length_greater)

console.log('=== Car Length Less than 8 ====')

length_smaller = car.filter(function (car) {
    return car.length<=8
})

console.log(length_smaller)