/*
Diseñar una función que detecte palíndromos, es decir, frases que se lean igual de izquierda 
a derecha o de derecha a izquierda. Por ejemplo: "Roma ni se conoce sin oro ni se conoce sin amor".
*/

function palindrome(text) {
    let fixed_text = text.toLowerCase().replace(/ /g, '')
    let reverse_text = fixed_text.split('').reverse().join('')
    if (fixed_text === reverse_text) {
        console.log('Es palíndrome')
    } else {
        console.log('No es palíndrome')
    }
}

palindrome("Roma ni se conoce sin oro ni se conoce sin amor")
palindrome('Me gusta el helado')