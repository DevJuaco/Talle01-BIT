// Crea un programa que solicite al usuario dos números usando el prompt y realice 
// operaciones de suma, resta, multiplicación y división con estos números. 
// Muestra los resultados en la consola para cada una de estas operaciones.

let number1 = prompt('ingrese el primer valor')
let number2 = prompt('ingresa el segundo valor')

number1 = Number(number1)
number2 = Number(number2)

function calculator () {
    suma = number1 + number2
    resta = number1 - number2
    multiplicacion = number1 * number2
    division = number1 / number2

    console.log (`la suma de los numeros es igual a ${suma}, la resta es igual a ${resta}
    la multiplicacion es a ${multiplicacion} la division es igual a ${division}`)
}

calculator()