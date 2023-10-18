// Estrutura de repetição 

// for
// break - para a execução do loop
// continue - pula a execução do momento

// condição (i < 10) para continuação do loop
// i++ incrementar na variável, até a condição chegar no valor 9
// aqui ele considera o 0 na contagem, então < 10, iria até 9
// contagem crescente
for(let i = 0; i <= 10; i++) {
    console.log(i)
}

// -----------------------

// contagem decrescente
for(let i = 100; i > 0; i--) {
    console.log(i)
}

// -----------------------

// aqui ele para, tem uma condição de parada
for(let i = 100; i > 0; i--) {
    if(i === 50) {
        break;
    }
    console.log(i)
}

// -----------------------

// nesse formato ele pula o 5
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }
    console.log(i)
}

// A estrutura de repetição for tem a seguinte sintaxe:

// for(inicialização de uma variável; condição de continuação para o loop; expressão final)

