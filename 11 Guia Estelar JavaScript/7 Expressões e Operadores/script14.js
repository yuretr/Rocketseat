// Operator precedence
// Precedência de operadores

// Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

/*

De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 

*/

console.log( 2 + 5 * 10)
// pela precerência, primeiro multiplica 5 * 10, depois soma com 2
// e assim funciona de acordo com a ordem de precedência acima

console.log( (2 + 5) * 10)
// primeiro soma entre parênteses e depois * 10

console.log( 3 > 2 > 1)
// 3 > 2 resultará true, true > 1 resultará false

// true === 1 (false)
// true == 1 (true)
// false === 0 (false)
// false == 0 (true)

console.log( 3 > 2 && 2 > 1 )
// true















