// Function Hoisting

// O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis.

sayName()
// aqui estou solicitando a função

function sayName() {
    console.log('Yure')
}
// bloco da função, veio depois, mas mesmo assim executou
// o JS por "debaixo dos panos", eleva as funções para o começo do código, isso se chama function hoisting


// -----------------------------------

testandoSayName()

var testandoSayName = function() {
    console.log('Kezia')
}

// isso não funciona com variáveis, independente sendo var, let, const

