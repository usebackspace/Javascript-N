// setTimeout- Execute ones after time is out,if we want to stop before time is out we use clearTimeout.eg alaram, if we want to stop alaram before the time.
// setInterval- Execute after each interval , so to stop interval we have to use clearInterval

// ======================================

console.log('==== SetTimeout Function ======')

console.log('setTimeout Session Start')

var cto = setTimeout(function avenger() {
    console.log('Avenger Assemble')
}, 5000)
console.log('setTimeout Session end')

function clear_timeout() {
    clearTimeout(cto)
}
// ======================================

console.log('==== SetInterval Function ======')

console.log('setInterval Session Start')

var ci = setInterval(function avenger() {
    console.log('Avenger Assemble')
}, 2000)
console.log('setInterval Session end')

function clear_interval() {
    clearInterval(ci)
}