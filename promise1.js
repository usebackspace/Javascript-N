console.log('===== Callback =====')

// =============================================
// console.log('start')

// function avenger(name) {
//     setTimeout(() => {
//         console.log('avenger Assemble')
//         return name
//     }, 2000)
// }

// let aven = avenger('steve')
// console.log(aven)

// console.log('end')

// =============================================

// console.log('==============================')

// console.log('start')

// function avenger(name,callback) {
//     setTimeout(() => {
//         console.log('avenger Assemble')
//         callback(name);
//     }, 2000)
// }

// let an = avenger('steve', (an)=>{ console.log(an) })


// console.log('end')

// =============================================

console.log('==============================')

console.log('start')

function avenger(name,callback) {
    setTimeout(() => {
        console.log('avenger Assemble')
        callback(name);
    }, 2000)
}

function heroic_name(name1,callback) {
    setTimeout(() => {
        console.log('Inside Heroic function')
        callback(name1)
    })
}
let an = avenger('steve', (an) => {
    console.log(an);
    heroic_name(an, (hn) => {
        if (hn == 'steve') {
            console.log('captain america')
        }
        else {
            console.log('He is not a herc')
        }
    })
})


console.log('end')
