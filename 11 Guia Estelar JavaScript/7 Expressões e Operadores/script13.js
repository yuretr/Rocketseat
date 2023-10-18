// Type conversion (typecasting) vs Type coersion

console.log(Number('9') + 5)
// type conversion sou eu fazendo a conversão, por exemplo o Number(), nesse caso a soma resultando em 14

console.log('9' + 5)
// type coersion é o JS fazendo a conversão por de trás, nesse caso transformando o 5 em uma string e concatendo os dois resultando em 95


// Falsy e truthy
// O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

// /*
// 	Todos os valores abaixo seriam representados como false em um boolean.
// 		false
//     0
//     -0
//     ""
//     null
//     undefined
//     NaN
// */

// ele será conseiderado false nos casos acima
console.log( false ? 'verdadeiro' : 'falso' )
console.log( 0 ? 'verdadeiro' : 'falso' )
console.log( -0 ? 'verdadeiro' : 'falso' )
console.log( "" ? 'verdadeiro' : 'falso' )
console.log( null ? 'verdadeiro' : 'falso' )
console.log( undefined ? 'verdadeiro' : 'falso' )
console.log( NaN ? 'verdadeiro' : 'falso' )


// -------------------------


// já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

// /* 
// 	Todos os valores abaixo seriam representados como false em um boolean.
// 		true
//     {}
//     []
//     1
//     3.23
//     "0"
//     "false"
//     -1
//     Infinity
//     -Infinity
// */

// ele será conseiderado true nos casos acima
console.log( true ? 'verdadeiro' : 'falso' )
console.log( {} ? 'verdadeiro' : 'falso' )
console.log( [] ? 'verdadeiro' : 'falso' )
console.log( 1 ? 'verdadeiro' : 'falso' )
console.log( 3.23 ? 'verdadeiro' : 'falso' )
console.log( "0" ? 'verdadeiro' : 'falso' )
console.log( "false" ? 'verdadeiro' : 'falso' )
console.log( -1 ? 'verdadeiro' : 'falso' )
console.log( Infinity ? 'verdadeiro' : 'falso' )
console.log( -Infinity ? 'verdadeiro' : 'falso' )

