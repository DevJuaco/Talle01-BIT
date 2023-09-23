// Declara un objeto que represente a una persona con propiedades como nombre, edad y dirección. 
// Luego, muestra la información de la persona en la consola accediendo directamente a sus propiedades. 
// El mensaje debe decir algo como: Juan tiene 45 años y vive en la calle 63 con carrera 24

let person = {
    nombre: 'Juan',
    edad: 20,
    direccion: 'cra 1 #30-160',
    profesion: 'full stack developer'
}

function objectPrperties () {
    console.log( `Buenos dias mi nombre es ${person.nombre} 
    mi edad es de ${person.edad} años vivo en la ${person.direccion} 
    y aspiro a una profesion como ${person.profesion}` )
}
objectPrperties()