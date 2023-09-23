// Usa el prompt para capturar un numero que representará una dirección cardinal 
// (Norte, Sur, Este, Oeste). Utiliza una estructura switch para determinar en qué 
// dirección se encuentra un punto cardinal opuesto (por ejemplo, Norte-opuesto es Sur).

let information = confirm ('1.norte, 2.sur, 3.este, 4.oeste ')
let direccion = prompt('ingrese la seccion a la que desea ingresar')
direccion = Number(direccion)

switch(direccion){
    case 1:
        alert('el punto cardinal opuesto es el sur')
        break;
    case 2:
        alert('el punto cardinal opuesto es el norte')
        break;
    case 3:
        alert('el punto cardinal opuesto es el oeste')
        break
    case 4:
        alert('el punto cardinal opuesto es el este')
        break;
    default:
        alert('valor ingresado no valido')                
}
window.location.reload()