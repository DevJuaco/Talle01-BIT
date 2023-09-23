// Crea un programa que solicite al usuario un número y determine si es positivo, 
// negativo o cero utilizando una estructura condicional (if).

let number = prompt('ingresa un valor numerico')
number = Number(number)

if (number > 0) {
    alert(`el numero ${number} es positivo`)
} else if (number < 0) {
    alert(`el numero ${number} es negativo`)
} else {
    alert(`el numero ${number} es cero`)
}

window.location.reload()