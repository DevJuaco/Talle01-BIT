// Usa el prompt para capturar dos numeros que representarán los ejes X y Y. 
// Utiliza una estructura if, if-else para determinar en qué cuadrante se encuentra 
// el punto que representa cada valor ingresado por el usuario, así:

// Si los dos valores son positivos, el punto se encuentra en el cuadrante 1
// Si X es positivo y Y es negativo, el punto se encuentra en el cuadrante 2
// Si los dos valore son negaticos, el punto se encuentra en el cuadrante 3
// Si X es negativo y Y es positivo, el punto se encuentra en el cuadrante 4

x = prompt('ingresa el valor de x')
y = prompt('ingresa el valor de y')

x = Number(x)
y = Number(y)

if(x >= 0 && y >= 0){
    alert ('el punto se encuentra en el cuadrante 1')
} else if (x >= 0 && y < 0) {
    alert ('el punto se encuentra en el cuadrante 2')
} else if (x < 0 && y < 0) {
    alert ('el punto se encuentra en el cuadrante 3')
} else {
    alert ('el punto se encuentra en el cuadrante 4')
}

window.location.reload()