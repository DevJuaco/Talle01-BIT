// Declara una variable booleana llamada esMayor y asigna el resultado de una 
// comparación entre dos edades (por ejemplo, 18 y 25). 
// Luego, muestra el valor de esMayor en la consola.

let valor1 = prompt('ingrese el primer valor')
let valor2 = prompt('ingresa el segundo valor')

valor1 = Number(valor1)
valor2 = Number(valor2)

let resolve = valor1 < valor2
let esMayor =  resolve

console.log(resolve)