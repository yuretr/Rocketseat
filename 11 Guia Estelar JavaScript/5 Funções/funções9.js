// Funções construtoras

// Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const yure = new Person("Yure")
const kezia = new Person("Kezia")
const banguela = new Person("Banguela")
// new seguido da função, transforma em função construtora, retornando um objeto
// this sempre será referência a variável declarada (yure no caso)
console.log(yure, kezia, banguela)
console.log(yure.walk())

// primeira letra da função construtora é uma boa prática, então sempre fazer nesse formato 


// Já existe no Javascript diversas funções construtoras

let nameex = new String("Yurezão")
console.log(nameex)

let dateex = new Date("2020-12-01")
console.log(dateex)

