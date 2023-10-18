// Retornando valores dentro da função

// Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

let total = 0

const sum = function(number1, number2){
    let total = number1 + number2
    return total
}

sum(2, 3)
sum(4, 5)
sum(56, 30090045)

// -----------------

let numero1 = 20
let numero2 = 5

sum(numero1, numero2)

console.log(`o número 1 é ${numero1}`)
console.log(`o número 2 é ${numero2}`)
console.log(`a soma é ${sum(numero1, numero2)}`)
// nesse caso acaba dando undefined
// pra resolver isso temos que colocar return e tirar o console.log de dentro

// antes estava assim:
// const sum = function(number1, number2){
//     console.log(number1 + number2)
// }

// **** Sempre colocar let antes de uma variável, pois se não acaba interpretando o valor fora do bloco (no caso da função), e se tiver uma variável com o mesmo nome, acaba alterando o valor e causando problemas no código
// console.log(total)

