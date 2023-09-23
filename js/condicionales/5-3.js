// Escribe un programa que pida al usuario su edad 
// y determine si es un niño, adolescente o adulto utilizando una estructura if-else-if.

let edad = prompt('ingresa tu edad')
edad = Number(edad)

if(edad <= 0){
    alert('valor ingresado no valido')
} 
else if (edad <= 12) {
    alert('Eres un niño')
} else if (edad <= 25) {
    alert('eres un adolecente')
} else {
    alert('eres un adulto')
} 

window.location.reload()