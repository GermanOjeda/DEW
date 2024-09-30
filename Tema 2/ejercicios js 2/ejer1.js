/*
Realizar una función que indicando un texto y un carácter (ambos obligatorios, comprobar que el segundo parámetro es realmente un único caracter), 
nos diga cuántas veces aparece el carácter en el texto.
*/

function count_letter(text, char) {
    let count = 0
    if (char.length > 1) {
        console.error("'char' solo puede ser un único caracter")
        return
    } else {
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) === char) {
                count += 1;
            }
        }
    }
    return count
}

console.log(count_letter('Me gustan los animales', 'l'))