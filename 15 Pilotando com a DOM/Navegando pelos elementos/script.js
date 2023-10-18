// Navegando pelos elementos
// parentElement e parentNode

// const body = document.querySelector('body')
// console.log(body.parentNode)
// console.log(body.parentElement)
// mostra os "pais", nesse caso do 'body' é o 'html'


// const element = document.querySelector('h1')
// console.log(element.parentElement)
// nesse caso pai de 'h1' é o 'header'


// ----------------------


// Pegando elementos filhos
// childNodes children
// const el = document.querySelector('body')

// console.log(el.childNodes)
// vai aparecer em Nodelist todos os filhos
// text pode ser espaços, se tirar some


// console.log(el.children)
// vai aparecer em HTMLCollection
// elimina os espaços vazios


// console.log(el.firstChild)
// pega o primeiro elemento
// considera os espaços vazios e textos

// console.log(el.firstElementChild)
// pega o primeiro elemento
// não considera os espaços vazios e textos


// console.log(el.lastChild)
// pega o último elemento
// considera os espaços vazios e textos

// console.log(el.lastElementChild)
// pega o último elemento
// não considera os espaços vazios e textos


// ----------------------


// Buscando irmãos
const el = document.querySelector('header')

// nextSibling nextElementSibling

console.log(el.nextSibling)
// próximo irmão
// considera os espaços vazios e textos

console.log(el.nextElementSibling)
// próximo irmão
// não considera os espaços vazios e textos


// previousSibling previousElementSibling

console.log(el.previousSibling)
// irmão anterior
// considera os espaços vazios e textos

console.log(el.previousElementSibling)
// irmão anterior
// não considera os espaços vazios e textos

