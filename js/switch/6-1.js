// Crea un programa que solicite al usuario tres notas calcular el promedio. 
// El rango permitido es de 0 a 5, incluidos decimales. 
// Utilice una estructura switch para mostrar un mensaje correspondiente a la calificación ingresada, así:

// Si saca menos de 2.5 ( 'Insuficiente, has perdido la materia' )
// Si saca 2.5 y de menos de 3.5 ( 'Insuficiente, tienes derecho a habilitar' )
// Si saca 3.5 y menos de 4.0 ( 'Aceptable' )
// Si saca 4.1 y hasta 5.0 ( 'Excelente' )

let note1 = prompt('ingresa tu primera nota')
let note2 = prompt('ingresa tu segunda nota')
let note3 = prompt('ingresa tu tercera nota')

note1 = Number(note1)
note2 = Number(note2)
note3 = Number(note3)

function verification() {
    if(note1 + note2 + note3 > 15){
        alert('verifica tus notas, ingresaste mal un valor')
    } else if (note1 < 0 || note2 < 0 || note3 < 0)  {
        alert('verifica tus notas, ingresaste mal un valor')
    } else {
        verificarPromedios()
    }
}

verification()

function verificarPromedios() {
    let promedio = (note1 + note2 + note3)/3
    redondo = Math.round(promedio)
    
    switch(redondo) {
        case 0:
        case 1:
        case 2:
            alert(`tu promedio es de ${promedio}, Insuficiente, has perdido la materia`)
         break;
        case 2.5:
        case 3: 
            alert(`tu promedio es de ${promedio}, Insuficiente, tienes derecho a habilitar`)
            break;
        case 3.5:
        case 4:
            alert(`tu promedio es de ${promedio}, aceptable`) 
            break;               
        default:
            alert(`tu promedio es de ${promedio}, excelente`)          
    }   
}

window.location.reload()