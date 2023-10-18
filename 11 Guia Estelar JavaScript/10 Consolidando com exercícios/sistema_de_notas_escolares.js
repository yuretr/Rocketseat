// Sistema de notas escolares

// Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

// Desafio:

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F


function resultadoNota(pontuacao) {
    let notaA = pontuacao >= 90 && pontuacao <= 100
    let notaB = pontuacao <= 89 && pontuacao >= 80
    let notaC = pontuacao <= 79 && pontuacao >= 70
    let notaD = pontuacao <= 69 && pontuacao >= 60
    let notaF = pontuacao < 60 && pontuacao >= 0

    if(notaA) {
        console.log('Resultado nota A')
    } else if(notaB) {
        console.log('Resultado nota B')
    } else if(notaC) {
        console.log('Resultado nota C')
    } else if(notaD) {
        console.log('Resultado nota D')
    } else if(notaF) {
        console.log('Resultado nota F')
    } else {
        console.log('Nota inválida')
    }
    return
}

resultadoNota(1)
resultadoNota(101)
resultadoNota(0)
resultadoNota(95)
resultadoNota(60)




// --------------------- resolução

// function resultadoNota(pontuacao) {
//     let notaA = pontuacao >= 90 && pontuacao <= 100
//     let notaB = pontuacao <= 89 && pontuacao >= 80
//     let notaC = pontuacao <= 79 && pontuacao >= 70
//     let notaD = pontuacao <= 69 && pontuacao >= 60
//     let notaF = pontuacao < 60 && pontuacao >= 0

//     let resultado;

//     if(notaA) {
//         resultado = "Resultado nota A"
//     } else if(notaB) {
//         resultado = "Resultado nota B"
//     } else if(notaC) {
//         resultado = "Resultado nota C"
//     } else if(notaD) {
//         resultado = "Resultado nota D"
//     } else if(notaF) {
//         resultado = "Resultado nota F"
//     } else {
//         resultado = "Nota inválida"
//     }
//     return resultado
// }

// console.log(resultadoNota(1))
// console.log(resultadoNota(101))
// console.log(resultadoNota(0))
// console.log(resultadoNota(95))
// console.log(resultadoNota(60))

