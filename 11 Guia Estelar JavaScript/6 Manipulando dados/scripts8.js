// Encontrando palavras em frases

// Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver!"
console.log(phrase.includes("Amor"))
// na frase não tem, então resultado será false

let phrase2 = "Eu quero viver o amor!"
console.log(phrase2.includes("Amor"))
// false, o includes faz diferença entre minúsculo ou maiúsculo

let phrase3 = "Eu quero viver o amor!"
console.log(phrase3.includes("amor"))
// nesse caso resultará em true

