// Alterando estilos com style


// style
// const element = document.querySelector('body')
// element.style.backgroundColor = "#EEE8AA"
// Nesse caso o background-color, pode ficar backgroundColor, existe essa mudança em palavras com -
// console.log(element.style.backgroundColor)


// classList
const element = document.querySelector('body')

element.classList.add('active', 'green')
// adiciona 'active' e 'green'

console.log(element.classList)

element.classList.remove('green')
// podemos remover


element.classList.toggle('green')
// aqui se tiver no caso de exemplo 'green' ele remove, se não tiver, ele adiciona, como anteriormente a gente removeu, ele então aplica porque não encontrou
// funciona como interruptor

