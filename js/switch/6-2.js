// Usa el prompt para solicitar un número que representará el mes del año 
// (por ejemplo, 1 para enero, 2 para febrero, etc.). 
// Utiliza una estructura switch para mostrar cuántos días tiene ese mes.

let mes = prompt('ingresa el nro del mes del año')
mes = Number(mes)

switch(mes){
    case 4:
    case 6:
    case 9:
    case 11:
        alert(`el mes ${mes} tiene 30 dias`)
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert(`el mes ${mes} tiene 31 dias`)
        break;
    case 2:
        alert(`el mes ${mes} tiene 28 dias o 29 si es año bisiesto`)
        break;
    default:
        alert(`el valor ${mes} no corresponde a ningun mes`)                                             
}

window.location.reload()