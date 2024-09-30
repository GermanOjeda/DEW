/*
Implementar una función que dado un texto, nos indique si todas las 
letras son minúsculas o mayúsculas, o una combinación de ambas.
*/

function identifycase(text) {
    let lowercase_text = text.toLowerCase()
    let uppercase_text = text.toUpperCase()
    if (text === lowercase_text) {
        console.log('El texto está en minúsculas')
    } else if (text === uppercase_text) { 
        console.log('El texto está en mayúsculas')
    } else {
        console.log('El texto está compuesto de mayúsculas y minúsculas')
    }
}

identifycase('me gusta el helado')
identifycase('ME GUSTA EL HELADO')
identifycase('mE GUStA El helAdO')