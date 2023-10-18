/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

    O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.
*/

{}
// esses colchetes são um objeto, algo já criado anteriormente, um protótipo já feito

"Yure".__proto__
// a partir do momento que coloca um ponto, disponibiliza diversos protótipos para a string

23.0.__proto__
// tem que colocar float para puxar as propriedades e valores


// um exemplo de funcionalidade, ele conta quantos caracteres
"Yure".length

// um exemplo que apareceu nos protótipos do Number 23.0
23.0.hasOwnProperty()
// vai resultar em false

// outro exemplo Array, funcionalidades
["a", "b"].length

