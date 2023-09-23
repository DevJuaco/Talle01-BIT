// Declara una variable para representar la edad de un usuario. 
// Luego, utiliza condicionales para determinar si el usuario es mayor o menor de edad 
// y muestra un mensaje apropiado

let edad = prompt ('Ingresa tu edad')
edad = Number(edad)

if (edad <= 17 && edad > 0) {
    console.log('Eres menor de edad')
} else if (edad >= 18) {
    console.log('Eres mayor de edad')
} else if (edad < 0) {
    console.log('No puedes ingresar valores negativos')
} else {
    console.log('Errooorr')
}