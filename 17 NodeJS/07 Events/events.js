const events = require('events')
// console.log(events)
// mostra o que pode ser usado


const { EventEmitter } = require('events')

const ev = new EventEmitter()
// vai receber um novo evento, é uma classe de estrutura de função

// console.log(ev)

ev.on('saySomething', () => {
    console.log('Eu ouvi você')
})
// escutando o evento emitido
// executando algo

ev.once('saySomething', (message) => {
    console.log('Eu ouvi você: ', message)
})
// once, ele executa uma única vez

ev.emit('saySomething', 'Yure')
ev.emit('saySomething', 'Yure2')
ev.emit('saySomething', 'Yure3')
// disparar o evento, só estou emitindo




