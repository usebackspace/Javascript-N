console.log('==== Appyling promise concept in async and await ===')

function avenger(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('avenger assemble')
            resolve(name)
        }, 2000)
    })
}

function heroic_name(nm) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Inside Heroic function')
            resolve(nm)
        }, 2000)
    })
}

function enemy(hn) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Inside Enemy function')
            resolve(hn)

        })
    })
}

async function mission() {
    let nm = await avenger('steve')
    console.log(nm)

    let hn = await heroic_name(nm)
    if (hn == 'steve') {
        console.log('He is a hero')
        hn = 'Red Skull'
    }
    else {
        console.log('He is not a hero')
    }

    let en = await enemy(hn)
    if (en == 'Red Skull') {
        console.log('Meet me on vlomir')
    }
    else {
        console.log('No Enemy')
    }

}

mission()

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

