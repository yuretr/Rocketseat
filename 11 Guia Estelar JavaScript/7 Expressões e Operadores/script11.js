// Operador condicional (Ternário)

// Dependendo da condição, nós recebemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top

let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
// se (pão) e (queijo) então 'café top', se não 'café ruim'

console.log(niceBreakfast)

// ---------

let pao2 = true
let queijo2 = false

const niceBreakfast2 = pao2 || queijo2 ? 'Café top' : 'Café ruim'
// se (pão) ou (queijo) então 'café top', se não 'café ruim'

console.log(niceBreakfast2)

// ---------

// Maior de 18

let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
// se (age) for maior ou igual (18) então 'can drive', se não "can't drive"
console.log(canDrive)



// Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

// Funciona da seguinte forma;

// condição ? valor1 : valor2

// Exemplo de uso:

// // Café da manhã top
// let pao = false
// let queijo = false

// const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

// console.log(niceBreakfast)

