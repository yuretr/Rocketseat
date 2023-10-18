// clearInterval irá cancelar um setInterval registrado

const timeOut = 1000
const checking = () => console.log('checking!')

let interval = setInterval(checking, timeOut)

// clearInterval(interval)
// aqui cancela o interval

setInterval( () => clearInterval(interval), 3000)
// aqui só cancela após 3 segundos estipulado

