
console.log('===== Promise [.then()] ====')

let promies = new Promise((resolve, reject) => {
    let success = false

    if (success) {
        resolve('operation successfull')
    }
    else {
        reject('Unsuccessfull')
    }
}).then(
    (value) => { console.log(value) },
    (error) => { console.log(error) }
    
)

// ======================================================

// console.log('===== Promise [.then(),.catch()] ====')

// let promies1 = new Promise((resolve, reject) => {
//     let success = false

//     if (success) {
//         resolve('operation successfull')
//     }
//     else {
//         reject('Unsuccessfull')
//     }
// }).then(
//     (value) => {
//         console.log(value)
//     }
// ).catch(
//     (error) => { console.log(error) }
// )

//=============================================================

// console.log('===== Promise [.then(),.catch(),.finally()] ====')

// let promies2 = new Promise((resolve, reject) => {
//     let success = false

//     if (success) {
//         resolve('operation successfull')
//     }
//     else {
//         reject('Unsuccessfull')
//     }
// }).then(
//     (value) => {
//         console.log(value)
//     }
// ).catch(
//     (error) => { console.log(error) }
// ).finally(
//     ()=>console.log('Finally')
// )

// ======================================================

// console.log('===== Promise chanining ====')

// let promies3 = new Promise((resolve, reject) => {
//     let success = true

//     if (success) {
//         resolve('operation successfull')
//     }
//     else {
//         reject('Unsuccessfull')
//     }
// }).then(
//     (value) => {
//         console.log(value)
//         return value + ' Hello Promise'
//     }
// ).then(
//     retval =>console.log(retval)
// )
// .catch(
//     (error) => { console.log(error) }
// ).finally(
//     ()=>console.log('Finally')
// )

// ====================================================

// console.log('==== Appyling promise concept in previous Example ===')

// function avenger(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('avenger assemble')
//             resolve(name)
//         }, 2000)
//     })
// }

// function heroic_name(nm) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Inside Heroic function')
//             resolve(nm)
//         }, 2000)
//     })
// }

// function enemy(hn) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Inside Enemy function')
//             resolve(hn)

//         })
//     })
// }

// avenger('steve').then(
//     (nm) => {
//         console.log(nm)
//         return heroic_name(nm)
//     }
// ).then(
//     (hn) => {
//         if (hn == 'steve') {
//             console.log('He is a hero')
//             hn = 'Red Skull'
//         }
//         else {
//             console.log('He is not a hero')
//         }
//         return enemy(hn)
//     }
// ).then(
//     (en) => {
//         if (en == 'Red Skull') {
//             console.log('Meet me on vlomir')
//         }
//         else {
//             console.log('No Enemy')
//         }
//     }
// )

