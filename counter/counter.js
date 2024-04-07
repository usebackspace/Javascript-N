let inc = document.getElementById('increase')
let dec = document.getElementById('decrease')
let reset = document.getElementById('reset')
let display = document.getElementById('display')
let v =display.value


inc.onclick = function() {
    v++;
    display.value = v;
}

dec.onclick = function() {
    v--;
    display.value = v;
}

reset.onclick = function() {
    v=0;
    display.value = v;
}

x = Math.floor(Math.random()*4)
//x = Math.floor(Math.random()*(20-10+1))+10       
console.log(x)