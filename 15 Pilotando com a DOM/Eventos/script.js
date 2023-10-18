// Adicionando eventos via HTML

// function print() {
//     console.log('print')
// }



// Eventos de Teclados

// const input = document.querySelector('input')
// input.onkeydown = function() {
//     console.log('rodei')
// }

// input.onkeydown, toda vez que eu pressionar qualquer tecla e preencher, ele roda o a função
// se eu segurar a tecla ele vai rodando conforme for preenchendo


// const input = document.querySelector('input')
// input.onkeyup = function() {
//     console.log('rodei')
// }

// input.onkeyup, toda vez que eu liberar ao soltar qualquer tecla e preencher, ele roda o a função
// se eu segurar a  tecla ele só conta quando eu soltar a tecla como 1


// const input = document.querySelector('input')
// input.onkeypress = function() {
//     console.log('rodei')
// }

// A diferença entre keydown() e keypress() está que o segundo não é capturado quando as teclas Ctrl, Alt ou Shift são pressionadas.



// Adicionando eventos via JS

// const h1 = document.querySelector('h1')

// h1.addEventListener('click', print)
// nesse caso ele executa quando clicar

// h1.addEventListener('mouseover', print)
// nesse caso ele executa quando for com o mouse encima

// addEventListener, "ouvidor de eventos"
// não coloco print(), porque se não ele executa direto



// Adicionando eventos via JS (Outro método)

// const h1 = document.querySelector('h1')

// h1.onclick = print
// function print() {
//     console.log('print')
// }

// só que a desvantagem disso é que por exemplo
// se colocarmos uma chamada novamente conforme abaixo junto no mesmo código, ele desconsidera o anterior, ele considera a última

// h1.onclick = function() {
//     console.log('outro momento')
// }


// maneira correta de acertar isso seria:

// const h1 = document.querySelector('h1')

// h1.addEventListener('click', print)

// function print() {
//     console.log('print')
// }

// h1.addEventListener('click', function() {
//     console.log('outro momento')
// })

// nesse caso executa as duas ao mesmo click, o addEventListener empilha as funcionalidades, e não desconsidera nenhuma delas no documento



// Argumento event

const input = document.querySelector('input')

// input.onkeypress = function(event) {
//     console.log(event)
// }
// ele mostra o evento, nesse caso o caractere digitado

// input.onclick = function(event) {
//     console.log(event)
// }
// ele mostra o evento, nesse caso que foi clicado no input

// input.onkeydown = function(event) {
//     console.log(event.key)
// }
// mostra as teclas digitadas

// input.onkeydown = function(event) {
//     console.log(event.currentTarget)
// }
// mostra o alvo do disparo do evento

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}
// apresenta o que foi digitado no input

