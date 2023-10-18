// clearTimeout cancelar um Timeout

const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
// guardei em uma variável

clearTimeout(timer)
// cancela o setTimeout
