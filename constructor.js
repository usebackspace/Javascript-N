console.log('===== Constructor ======')

function Avenger(name) {
    this.name = name,
    this['heroic name'] = 'captain'
    this.power = function () {
         return `I am ${this.name} my heoric name is ${this['heroic name']}`
        }
        
}

let sr = new Avenger('steve roger')
console.log(sr)
console.log(sr.name)
console.log(sr['heroic name'])
console.log(sr.power())

let ts = new Avenger('tony stark')
console.log(ts)
console.log(ts.name)
ts['heroic name']='Iron Man'
console.log(ts['heroic name'])
console.log(ts.power())

console.log('=================')

console.log('===== Creating Constructor in class =====')


class Shield{
    constructor(name) {
        this.name = name
        this['heroic name'] = 'Captain America'
    }
        power(){
            return `I am ${this.name} and my heroic name is ${this['heroic name']} `
        }
        
}

let sr1 = new Shield('steve roger')
console.log(sr1.name)
console.log(sr1.power())

let ts1 = new Shield('tony stark')
console.log(ts1.name)
ts1['heroic name']='iron man'
console.log(ts1.power())