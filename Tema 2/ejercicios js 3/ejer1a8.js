/*
1 Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos (por
defecto 10, valor mínimo del elemento (por defecto 100), valor máximo (por defecto 200)
*/

function random_array(num_items = 10, min_value = 100, max_value = 200) {
    let result = []
    for (let i = 0; i < num_items; i++) {
        let value = Math.floor(Math.random() * (max_value - min_value + 1) + min_value)
        result.push(value)
    }
    return result
}

/*
2 Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos entre 20 y 100 y luego ordenarlo.
*/

let sorted_array = random_array(20, 20, 100).sort()
console.log('\nEjercicio 2: Ordenar array')
console.log(sorted_array)

/*
3 Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array ordenado creado en el ejercicio anterior
*/

function randomize_array(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

let shuffled_array = randomize_array(sorted_array)
console.log('\nEjercicio 3: mezclar array')
console.log(shuffled_array)

/*
4 Recorrer un array aleatorio generado con la función del ejercicio 1 (15 elementos entre -10 y 20) 
y para cada elemento x, gestionar un nuevo array de la siguiente forma:
 • x <= -5: Eliminar el primer elemento del array
 •-5 < x <= 0: Eliminar el último elemento del array
 • 0 < x <=  10: Añadir x al principio del array
 • 10 < x <=  10: Añadir x al final del array
 Mostrar un mensaje de texto para cada número indicando el valor de x, la operación realizada 
(eliminar o añadir, al principio o al final), el número añadido/eliminado y el tamaño del array tras 
realizar la operación 
*/

console.log('\nEjercicio 4: Modificar array nuevo en base al valor')
let random_array = random_array(15, -10, 20)
let new_array = Array.from(random_array)
for (let value of random_array) {
    if (value <= -5) {
        console.log(`Valor ${value} / Se elimina el primer elemento ${new_array.shift()} / Tamaño del array ${new_array.length}`)
    } else if (-5 < value <= 0) {
        console.log(`Valor ${value} / Se elimina el último elemento ${new_array.pop()} / Tamaño del array ${new_array.length}`)
    } else if (0 < value <= 10) {
        console.log(`Valor ${value} / Se añade el valor como el primer elemento / Tamaño del array ${new_array.unshift(value)}`)
    } else if (10 < value <= 15) {
        new_array[new_array.length - 1] = value
        console.log(`Valor ${value} / Se añade el valor como el último elemento / Tamaño del array ${new_array.length}`)
    } 
}

/*
5 Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada 
elemento. Probar con un array aleatorio de 20 números entre 60 y 100.
*/

function raiz_cuadrada_array(array) {
    let new_array = []
    for (let value of array) {
        new_array.push(parseFloat(Math.sqrt(value).toFixed(2)))
    }
    return new_array
}

console.log('\nEjercicio 5: elementos del array hechos raiz cuadrada')
random_array = random_array(20, 60, 100)
console.log(random_array)
let sqrt_array = raiz_cuadrada_array(random_array)
console.log(sqrt_array)

/*
6 Crear una función que devuelva el valor máximo y mínimo del array, e indique el índice de estos 
valores (si el valor se repite, informar sólo sobre la primera vez que aparezca). Probar con un array 
aleatorio de 20 números entre -100 y 100.
*/

function maximum_minimum_values(array) {
    let max_index = 0
    let min_index = 0
    let max_value = array[0]
    let min_value = array[0]
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max_value) {
            max_value = array[index]
            max_index = index
        }
        if (array[index] < min_value) {
            min_value = array[index]
            min_index = index
        }
    }
    return {min_value: min_value, min_index: min_index, max_value: max_value, max_index: max_index}   
}

console.log('\nEjercicio 6: Máximos y minimos del array')
random_array = random_array(20, -100, 100)
console.log(random_array)
console.log(maximum_minimum_values(random_array))

/*
7 Crear un array de 50 números aleatorios enteros aleatorios entre 10 y 20. Para cada elemento, 
informar si es la primera vez que aparece, o si se trata de un elemento repetido
*/

console.log('\nEjercicio 7: Verificar números nuevos')
random_array = random_array(50, 10, 20)
let checked_values = []
for (let value of random_array) {
    if (!checked_values.includes(value)) {
        console.log(`Es la primera vez que aparece ${value}`)
        checked_values.push(value)
    }
}

/*
8 Modificar el ejercicio anterior para que si el número ya existía, nos indique cuántas veces había 
aparecido con anterioridad.
*/

console.log('\nEjercicio 8: Verificar números nuevos y contar los repetidos')
random_array = random_array(50, 10, 20)
checked_values = []
for (let value of random_array) {
    if (!checked_values.includes(value)) {
        console.log(`Es la primera vez que aparece ${value}`)
    } else {
        let count = checked_values.filter(x => x == value).length
        console.log(`${value} ya a aparecido ${count} veces.`)
    }
    checked_values.push(value)
}