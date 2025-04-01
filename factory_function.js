console.log('===== Factory Function ======')

console.log('======  Without Parameter =====')
function avenger() {
    return {
        name: 'steve roger',
        'heroic name': 'captain america',
        power: function () {
            return 'shield'
        }
    }
}

let a = avenger()

console.log(a.name)
console.log(a['heroic name'])
console.log(a.power())

console.log('==== With Parameter =====')

function shield(name) {
    return {
        full_name: name,
        power: function() {
            return ' I am the hero'
        }
    }
    
}

let s = shield('steve roger')
console.log(s.full_name)
console.log(s.power())

console.log('==========')

let s1 = shield('tony stark')
console.log(s1.full_name)