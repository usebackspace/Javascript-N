console.log('===== Callback ======')


function avenger() {
    console.log('Avenger Assemble')
}

function shield(callback) {
    callback()   
}

shield(avenger)

// shield(function avenger() {
//     console.log('Avenger Assemble')
// })

// shield(function () {
//     console.log('Avenger Assemble')
// })

// shield(()=>{
// console.log('Avenger Assemble')
// })

// shield(() => console.log('Avenger Assemble'))

//===========================================
console.log('==== Synchrnous Function ======')

console.log('start')

shield(function avenger() {
    console.log('Avenger Assemble')
})

console.log('end')

//===========================================
console.log('==== Asynchrnous Function ======')

console.log('start')

// In synchronus case we are using shield() i.e user defined function. where as setTimeout() is built in function

setTimeout(function avenger() {
    console.log('Avenger Assemble')
}, 2000)

console.log('end')


