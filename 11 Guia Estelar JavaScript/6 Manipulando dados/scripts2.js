/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

// Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número.

// Type conversion, eu Dev altero
// Type coersion, Javascript altera


console.log('5' + 2)
// fica 52, se torna String, JS converteu, Type coersion

console.log(Number('9') + 5)
// fica 14, Type conversion, alterou 9 de String para Number, e fez a soma

