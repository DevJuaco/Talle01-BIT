// Declara una variable de tipo string con una cadena de texto larga.  
// Luego, utiliza métodos de cadenas para obtener la longitud de la cadena, 
// convertirla a minúsculas y mostrar la última palabra en mayúsculas.

const text = 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.'

 function textArrays () {
     console.log('largo del texto')
     console.log (text.length)
     
     console.log('convierte en minusculas todo el texto')
     min = text.toLowerCase()
     console.log(min)

     console.log('pone la ultima palabra en mayuscula')
     console.log (min.replace('dinámico', 'DINAMICO'))
}
textArrays()

