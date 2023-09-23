// Crea un programa que declare una variable para almacenar la temperatura actual en grados Celsius. 
// Luego, convierte esta temperatura a grados Fahrenheit utilizando la fórmula correspondiente 
// y muestra el resultado en la consola.

let temperatura = prompt ('ingresa la temperatura en celcius')
temperatura = Number(temperatura)

function getTemperatura () {
    resolve = ((temperatura * 9/5) + 32)
    return console.log (`la temperatura es de ${resolve}° Fahrenheit`)
}

getTemperatura()