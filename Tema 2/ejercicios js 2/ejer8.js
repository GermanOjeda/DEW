/*
Escribir una función que busque la cadena "arriba" en un texto. La función 
deberá informar si encuentra o no esta cadena en el texto y, si la encuentra, nos deberá 
mostrar el texto reemplazando "arriba" por "abajo".
*/

function arriba_replace(text) {
    if (text.search(/arriba/) != -1) {
        console.log('Se ha encontrado la palabra "arriba" y se ha reemplazado por "abajo, la frase quedaría de esta manera:')
        console.log(text.replace(/arriba/g, 'abajo'))
    }
}

arriba_replace('El vecino de arriba hace mucho ruido')