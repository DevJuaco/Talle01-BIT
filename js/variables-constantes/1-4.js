// Usa el prompt para tomar dos números como argumentos 
// y utilice una variable para almacenar la suma de estos números. 
// Luego, muestra el resultado en la consola.

valor1 = prompt ('ingresa el primer numero')
valor2 = prompt ('ingresa el segundo numero')

valor1 = Number(valor1)
valor2 = Number(valor2)

function suma () {
    resolve =  (valor1 + valor2)
    console.log(`la suma de ${valor1} + ${valor2} es igual a ${resolve}`)
}

suma()

