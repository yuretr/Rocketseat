// Celsius to Fahrenheit

// Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

// Desafio:

// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

// resolução:

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
// aqui transforma todas as letras de entrada em maíusculas, e identifica se tem a letra C ou F

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }   // !!celsiusExists OU !fahrenheitExists, se não existir

    // fluxo ideal F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    // fez uma function =>, e tirou os parenteses
    let degreeSign = 'C'

    // fluxo alternativo C -> F
    if(celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F' 
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50Z'))
} catch (error) {
    console.log(error.message)
}   //error.message aparece somente a mensagem, não toda a descrição do erro


// DICA, adicionar expressão regular

// ----------------------------------


// esse eu que fiz:

// function temperatura(valor) {
//     const celsiusidentif = valor.toUpperCase().includes('C')
//     const fahrenheitidentif = valor.toUpperCase().includes('F')
    
//     if(celsiusidentif == true) {
//         let valorSemLetra = valor.toUpperCase().replace('C', '')
//         let transformarF = (valorSemLetra * 9/5 + 32)
//         resultado = console.log(`resultado: ${transformarF}F`)
//     } else if(fahrenheitidentif == true) {
//         let valorSemLetra = valor.toUpperCase().replace('F', '')
//         let transformarC = (valorSemLetra - 32) * 5/9
//         resultado = console.log(`resultado: ${transformarC}C`)     
//     } else {
//         console.log("Valor de entrada inválido, formato aceito: '0C' ou '0F' ")
//     }

//     return resultado
// }

// temperatura('50F')
// temperatura('20C')


// includes() O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false

// replace() em javascript serve para fazer desde simples substituições de string até complexas mudanças com regex. Como por exemplo: tirar caracteres especiais, pontos, traços, operadores e qualquer outra parte indesejada de um texto.






