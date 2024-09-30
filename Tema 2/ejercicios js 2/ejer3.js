/*
Implementar una función que dados dos números, nos escriba el resultado de la suma con console.log 
usando 4 formas diferentes (lista de argumentos, concatenación de strings, marcadores de posición y plantillas).
*/

function addition(a, b) {
    console.log(a + b)
    console.log('El resultado de ' + a + ' + ' + b + ' es ' + (a + b))
    console.log('El resultado de %d + %d es %d', a, b, a + b)
    console.log(`El resultado de ${a} + ${b} es ${a + b}`)
}

addition(4, 4)