// Crea un programa que declare un lista de nombres de frutas. 
// Luego, elimina la primera fruta, ahora cambia el valor de la segunda fruta 
// que ahora esta de primero en la lista,
// inserta una nueva fruta al final de la lista y muestra toda la lista en consola.

let fruitList = [
    'mango',
    'pera',
    'papaya',
    'fresa',
    'sapote',
    'granadilla'
]

function deleteFirstElement () {
    console.log(fruitList)

    let deleteMango = fruitList.shift()
    console.log(fruitList)

    fruitList[0] = 'sandia'
    console.log(fruitList)

}
deleteFirstElement()