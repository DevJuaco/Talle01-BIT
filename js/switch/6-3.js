// Usa el prompt para que tome un valor numérico del 1 al 12 
// (representando un mes) como argumento y devuelva el nombre del mes utilizando una estructura switch.

let mes = prompt('ingresa el nro del mes del año')
mes = Number(mes)

switch(mes) {
    case 1: 
        alert('enero')
        break;
    case 2: 
        alert('febrero')
        break;
    case 3: 
        alert('marzo')
        break;   
    case 4: 
        alert('abril')
        break;  
    case 5: 
        alert('mayo')
        break;
    case 6: 
        alert('junio')
        break; 
    case 7: 
        alert('julio')
        break;
    case 8: 
        alert('agosto')
        break;
    case 9: 
        alert('septiembre')
        break;
    case 10: 
        alert('octubre')
        break;
    case 11: 
        alert('noviembre')
        break;
    case 12: 
        alert('diciembre')
        break;
    default:
        alert(`el valor ${mes} no corresponde a ningun mes`) 
}

window.location.reload()