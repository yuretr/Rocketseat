// process.stdout.write("Alguma coisa \n")

const questions = [
    "O que aprendi hoje? ",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar? ",
    "O que me deixou feliz hoje? ",
    "Quantas pessoas ajudei hoje? ",
]

// “write”, escreve um texto na página
const ask = ( index = 0 ) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

// comecei o aplicativo chamando ask()
ask()


// // on() vai servir como ouvindo eventos
// // "data", será dados
// process.stdin.on("data", data => {
//     process.stdout.write(data.toString().trim() + `\n`)
//     process.exit()
// })
// // trim, remove qualquer espaço vazio no inicio e fim
// // process.exit para fechar o processo, se não ele não encerra


const answers = []
// receberá as respostas

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log("\n Perguntas \n")
        console.log(questions)
        console.log("\n Respostas \n")
        console.log(answers)
        process.exit()
    }
})
// if, enquanto a quantidade de respostas for menor que a quantidade de perguntas, rodar com a quantidade do aswers (respostas, 1, 2, 3, até chegar na quantidade de perguntas)
// data, aciona quando tiver um ENTER, entrada de dado, e executa a função

// quando houver o evento exit (process.exit()), ele dispara essa função
process.on('exit', () => {
    console.log(`
        Bacana Yure!

        O que você aprendeu foi:
        ${answers[0]}

        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!

        Volte amanhã para novas reflexões!
    `)
})

// template literals são esses fechamentos ``
