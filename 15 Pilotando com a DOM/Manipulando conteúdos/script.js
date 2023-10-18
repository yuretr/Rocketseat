// Manipulando conteúdo

// textContent
// const element = document.querySelector('h1')
// element.textContent = "Olá Devs!"
// console.log(element.textContent)


// innerText
// const element = document.querySelector('h1')
// element.innerText = "Olá Dev!"
// console.log(element.textContent)


// innerHTML
// const element = document.querySelector('h1')
// element.innerHTML = "Olá Devs! <small>!!!</small> "
// console.log(element.textContent)
// consigo utilizar HTML


// Value
// const element = document.querySelector('input')
// console.log(element.value)
// element.value = "Valor que eu quiser"
// serve tanto para alterar, quanto pra pegar a informação


// Manipulando atributos
const header = document.querySelector('header')
header.setAttribute('id', 'header')
// adicionamos id #header
const headerID = document.querySelector('#header')
console.log(headerID)

console.log(headerID.getAttribute('id'))
// a gente consegue pegar somente o atributo

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
// remove o id, se observar o inspecionar não vai ter mais

header.setAttribute('id', 'bg header')
// podemos adicionar também, observar a inespeção



// innerText -> Retorna somente o texto, sem formatações ou elementos html.

// innerHtml -> Retorna o texto, COM formatações e COM elementos html.

// textContent -> Retorna o text COM formatações, mas sem os elementos html.