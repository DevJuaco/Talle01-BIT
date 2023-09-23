// Es noche de amor y amistad, en esta ocasión el cover para ingresar a la disco 
// incrementará 2 veces para los chicos y decrementará 2 veces para las chicas. 
// El valor habitual es de 7 dólares. Usando el prompt solicite el nombre y el 
// genero de una persona e imprima usando alert() el siguiente mensaje si es un chico 
// Juan tu entrada a la disco vale $9 dólares, 
// en caso de ser chica Ana tu entrada a la disco vale $5 dólares

let price = 7

let name = prompt('ingresa tu nombre')
let gender = prompt('ingresa tu genero (masculino - femenino)')

if(gender == 'masculino') {
    priceMan = price += 2
    alert(`${name} tu entrada a la disco vale $${priceMan} dolares`)
} else if (gender == 'femenino'){
    priceWomen = price -= 2
    alert(`${name} tu entrada a la disco vale $${priceWomen} dolares`)
} else {
    alert('verifica, ingresaste mal la informacion')
}