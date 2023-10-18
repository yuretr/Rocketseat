// Criando e adicionando elementos na página

// createElement
// const div = document.createElement('div');
// a div está criada, não aparente mas em memória
// div.innerText = 'Olá devs'
// adicionando informação interna na div, mas ainda não aparece


// append prepend
// const body = document.querySelector('body')
// body.append(div)
// append adiciona após os elementos a div no HTML

// body.prepend(div)
// prepend adiciona antes de qualquer elemento


// ----------------------


// insertBefore
const div = document.createElement('div');
div.innerText = 'Olá devs'

const body = document.querySelector('body')
const script = document.querySelector('script')

// não quero adicionar no final e nem no começo
// adicionar ao decorrer, no meio
// Before significa antes
body.insertBefore(div, script)

// adicionou a div, dentro do body, antes do script


// não existe um isertAfter, mas podemos simular um após
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)

