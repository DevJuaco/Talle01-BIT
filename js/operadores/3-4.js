// Crea un programa que calcule el área de un triángulo utilizando la 
// fórmula: área = (base * altura) / 2. 
// Solicita al usuario que ingrese los valores de la base y la altura usando el prompt

let base = prompt('ingrese la base del traingulo')
let altura = prompt('ingrese la altura del triangulo')

base = Number(base)
altura = Number(altura)

function getArea () {
    resolve = (base * altura) / 2
    console.log(`el area del triangulo es de ${resolve}cm`)
}

getArea()