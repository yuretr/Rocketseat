// Herdando do EventEmitter 

const { inherits } = require('util')
// puxando módulo útil
// puxando função inherits

const { EventEmitter } = require('events')
// inherits vai herdar as funcionalidades do EventEmitter, para essa função Charecter

function Charecter(name) {
    this.name = name
}

inherits(Charecter, EventEmitter)

const chapolin = new Charecter('Chapolin')
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')
