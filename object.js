console.log('---- Creating Object in different way ----')

console.log('---- 1. Using Object literals (Most Common Way) -----')
let avenger = {
    f_name: 'Steve',                     // properties
    l_name: 'Roger',                    //  properties
    'heroic name': 'Captain America',    //   properties
    power: function () { return 'I am the first avenger' }   // This is called method
}
// All these f_name,l_name,heroic_name are called properties of the object.

// let marvel = {f_name: 'Steve',l_name: 'Roger',heroic_name: 'Captain America'} you can also write in single line.

// Accessing properties and method
console.log(avenger)
console.log(avenger.f_name)
console.log(avenger['heroic name'])
console.log(avenger.power())

// Assigning new value to the properties and method
avenger.f_name = 'Steven'
avenger.power = function () { return 'I am now an avenger !' }
console.log(avenger)
console.log(avenger.power())

// Deleting properties and method in objects.

delete avenger.l_name
delete avenger.power

console.log(avenger)
// =========================================================

console.log('---- 2. Using Object Constructor -----')

let dc = new Object()      // => is same as let dc= {}
dc.f_name = 'Bruce'
dc.l_name = 'Wayne'
dc['heroic name'] = 'Batman'
dc['power'] = function(){ return 'My Power is Darkness'}

console.log(dc)
console.log(dc.l_name)
console.log(dc['heroic name'])
