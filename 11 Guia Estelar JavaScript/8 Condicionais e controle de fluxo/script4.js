// Throw e Try/Catch


// throw (disparar, lançar)
function sayMyName(name = '') {
    if(name === '') {
        throw new Error("Nome é necessário")
        // poderia ser só (throw 'Nome é necessário')
    }
    console.log('Depois do erro')
}


// try....catch
// (try, vamos tentar executar um bloco de código)
// (catch, pegar, capturar erro)
try {
    sayMyName()
} catch(e) {
    console.log(e)
}
console.log('após a função de erro')

// é importante o try...catch, para não parar a aplicação inteira















// Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

// Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

// Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

// function sayMyName(name = '') {
//     if (name === '') {
//         throw 'Nome é obrigatório'
//     }

//     console.log(name)
// }

// Nesse caso, se o nome vier vazio, será disparada uma mensagem.

// Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

// try {
//     sayMyName()
// } catch(e) {
//     console.log(e)
// }

// console.log('após ao try/catch')

// O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.

