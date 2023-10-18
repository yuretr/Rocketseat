// If e Else

if(true) {

} else {

}
// dentro dos parênteses é uma condicional (condição)
// se for true executa o bloco if, se não for vai executar else

let temperature = 36.5

if(temperature >= 37){
    console.log('Está com febre')
} else {
    console.log('Não está com febre')
}

// --------------------------

let temperature2 = 42

if(temperature2 >= 37 && temperature2 < 37.5){
    console.log('Está com febre')
} else if(temperature2 >= 37.5) {
    console.log('Está com febre alta')
} else {
    console.log('Não está com febre')
}
// podemos ter mais condições
// em algumas situações que podemos tirar o bloco, mas melhor não fazer isso pra não ter erros

// --------------------------

let temperature3 = 37.5
let highTemperature = temperature3 >= 37.5
let mediumTemperature = temperature3 >= 37 && temperature3 < 37.5

if(mediumTemperature){
    console.log('Está com febre')
} else if(highTemperature) {
    console.log('Está com febre alta')
} else {
    console.log('Não está com febre')
}
// pode ser atribuído a variáveis (DICA)


// Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

// Sua sintaxe é simples, como pode ver a seguir:

// if (condição) {
//     //apenas será executado o bloco de código caso condição seja true
// } else {
//   // apenas será executado o bloco de código caso condição do if seja false
// }

// O exemplo utilizado pelo professor no vídeo é o seguinte, acompanhe para poder visualizar o processo até chegarmos nesse código.

// let temperature = 36.9
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

// if(highTemperature) {
//     console.log('Febre alta')
// } else if(mediumTemperature) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

