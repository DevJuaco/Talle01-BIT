// Crea un programa que solicite al usuario una opción de menú (por ejemplo, 1 para "Ver perfil", 
// 2 para "Editar configuración", etc.) y utilice una estructura switch 
// para realizar la acción correspondiente.

let information = confirm ('1.ver perfil, 2.editar configuracion, 3.home ')
let menu = prompt('ingrese la seccion a la que desea ingresar')
menu = Number(menu)

switch (menu) {
    case 1:
        alert('bienvenido a ver perfil')
        break;
    case 2:
        alert('bienvenido a editar configuracion')
        break;
    case 3:
        alert('bienvenido al home')
        break;
    default:
        alert('valor incorrecto')        
}
window.location.reload()