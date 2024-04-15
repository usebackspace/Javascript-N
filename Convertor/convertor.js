let input = document.getElementById('value')
let m_to_c = document.getElementById('m_to_c')
let km_to_m = document.getElementById('km_to_m')
let km_to_mi = document.getElementById('km_to_mi')
let result = document.getElementById('res')


function convert(){
    
    if (input.value > 0) {
        
        if (m_to_c.checked){
            let con = input.value*100
            result.textContent=`${input.value} Meter => ${con} Centimeter`
        }
        else if (km_to_m.checked>0) {
            let con = input.value*1000
            result.textContent=con
        }
        else if (km_to_mi.checked>0) {
            let con = input.value*1.6
            result.textContent=con
        }
        else {
            result.textContent="Please Choose Valid Conversion Unit"
            
        }
    }
}

