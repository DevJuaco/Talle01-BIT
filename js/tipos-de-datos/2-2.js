// Usa el prompt para que tome un número. 
// Indique si el número es par o impar lanzando un alert()

let number = prompt('ingresa un numero')
number = Number(number)

if (number % 2 == 0){
    alert ('el numero es par')
} else  {
    alert ('el numero es impar')
}

window.location.reload()