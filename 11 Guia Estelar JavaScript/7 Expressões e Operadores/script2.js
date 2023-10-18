/* 
  new

  * left-hand-side expression
  * criar um novo objeto
*/

// cria um objeto do tipo String
let nam = new String('Yure')
nam.surName = "Trevizan"
// cria um objeto do tipo Number
let age = new Number(26)
console.log(nam, age, nam.surName)


let date = new Date('2020-12-01')
console.log(date)
console.log(date.__proto__)


// A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

// Um exemplo de seu uso é:

// let date = new Date('2020-12-01')
// console.log(date.__proto__)

