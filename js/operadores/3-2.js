// Declara una variable numérica. Usa el prompt para pedir al usuario que ingrese un valor numérico. 
// Utiliza operadores de comparación para determinar si son iguales o si una es mayor que la otra. 
// Muestra los resultados en la consola.

let number1 = prompt('ingrese el primer valor')
let number2 = prompt('ingresa el segundo valor')

number1 = Number(number1)
number2 = Number(number2)

function comparation() {
    if (number1 === number2) {
        console.log(`${number1} es igual a ${number2}`)
    } else if ( number1 !== number2) {
        console.log(`${number1} es diferente a ${number2}`)
    }
}

comparation()