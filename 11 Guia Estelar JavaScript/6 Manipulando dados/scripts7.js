// Separando strings

// Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver um Amor!"

let myArray = phrase.split(" ")
// separa pelo espaço

// let myArray = phrase.split("o")
// // separa pela letra "o"

console.log(myArray)

// --------------------

let phraseWhithUnderscore = myArray.join("_")
// determina separação com o "_"
console.log(phraseWhithUnderscore.toLowerCase())
// e deixamos tudo em minúsculo

