// Declara una constante llamada PI y asigna el valor de π (aproximadamente 3.14159) a ella. 
// Luego, pide al usuario que ingrese el radio de un círculo y calcula su área utilizando la constante PI.

let radius = prompt ('ingresa el radio del circulo')
radius = Number(radius)

function getArea () {
    const PI = 3.14159
    resolve = (PI * radius ** 2)
    console.log (`El area del circulo es de ${resolve}`)
}

getArea()