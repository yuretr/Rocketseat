// Contando caracteres e digitos

// Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo"
console.log(word.length)

let number = 468791
console.log(String(number).length)

// console.log(number.length)
// nesse formato não funciona, resulta em undefined
// temos que converter em string para calcular os caracteres

