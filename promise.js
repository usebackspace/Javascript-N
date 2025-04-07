console.log('===== Callback =====')

// =============================================
console.log('start')

function avenger(name) {
    setTimeout(() => {
        console.log('Inside Avenger function')
        return name
    }, 2000)
}

let aven = avenger('steve')
console.log(aven)

console.log('end')

// =============================================

// console.log('==============================')

// console.log('start')

// function avenger(name,callback) {
//     setTimeout(() => {
//         console.log('Inside Avenger function')
//         callback(name);
//     }, 2000)
// }

// let an = avenger('steve', (an)=>{ console.log(an) })


// console.log('end')

// =============================================

// console.log('==============================')

// console.log('start')

// function avenger(name,callback) {
//     setTimeout(() => {
//         console.log('Inside Avenger Function')
//         callback(name);
//     }, 2000)
// }

// function heroic_name(name1,callback) {
//     setTimeout(() => {
//         console.log('Inside Heroic function')
//         callback(name1)
//     })
// }
// let an = avenger('steve', (an) => {
//     console.log(an);
//     heroic_name(an, (hn) => {
//         if (hn == 'steve') {
//             console.log('captain america')
//         }
//         else {
//             console.log('He is not a herc')
//         }
//     })
// })

// console.log('end')

// =============================================

// console.log('==============================')

// console.log('start')

// function avenger(name,callback) {
//     setTimeout(() => {
//         console.log('Inside avenger fucntion') 
//         callback(name)
//     },2000)
    
// }

// function heroic_name(hn,callback) {
//     setTimeout(() => {
//         console.log('inside heroic function')
//         callback(hn)
//     })
// }

// function enemy(en,callback) {
//     setTimeout(() => {
//         console.log('inside Enemy function')
//         callback(en)

//     })
// }
// let aven = avenger('steve', (nm) => {
//     console.log(nm);
//     heroic_name(nm, (hn) =>{
//         if (hn == 'steve') {
//             console.log('he is a hero')
//             hn ='Red skull'
//         }
//         else {
//             console.log('he is not a hero')
//         }
//         enemy(hn, (en) => {
//             if (en == 'Red skull') {
//                 console.log('Meet me on vlomir')
//             }
//             else {
//                 console.log('No Enemy')
//             }
//         })
//     })
    
//  })

// console.log('end')
