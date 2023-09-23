// Declara una variable para representar la temperatura en grados Celsius. 
// Utiliza una estructura if-else para determinar 
// si la temperatura está por encima o por debajo de cero grados y muestra un mensaje apropiado.

let celsius = prompt('ingresa la temperatura')
celsius = Number(celsius)

if(celsius > 0){
    alert('la temperatura esta por encima de 0 grados celsuis')
} else if (celsius < 0) {
    alert('la temperatura esta por debajo de 0 grados celsius')
} else {
    alert('la temperatura es igual a 0 grados celsius')
}

window.location.reload()