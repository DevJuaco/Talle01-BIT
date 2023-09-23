// Crea un programa que tome un número como argumento y 
// utilice el operador ternario para determinar si es par o impar. 
// Devuelve un mensaje que indique el resultado.

let number = prompt('ingresa un numero')
number = Number(number)

number %2 == 0 ? alert(`el numero ${number} es par`) : alert(`el numero ${number} es impar`)

window.location.reload()