// setTimeout vai rodar uma função de X milissegundos

const timeOut = 3000
// 3000 = 3 segundos

const finished = () => console.log('done!')
// como só vai ter uma linha, a função pode ser assim

setTimeout(finished, timeOut)
// dois argumentos
// finished passo sem os parenteses, para ser uma referência, se não ela executa direto

// finished é callback, call chamada, back de volta, depois do tempo estipulado (3 segundos)

console.log('Mostrar, esse não tem tempo estipulado')

// NodeJS é assincromo, por isso acontece isso
// se fosse sincromo, seria um por vez
