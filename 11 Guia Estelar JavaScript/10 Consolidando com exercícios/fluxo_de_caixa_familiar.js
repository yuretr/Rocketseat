// Fluxo de caixa familiar

// Esse desafio envolve a criação de dois arrays e uma função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

// Desafio:

// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.



// 2 array
const receitas = [400]
const despesas = [400]

// 1 objeto
const fluxoCaixa = {
    receitas,
    despesas,
}
console.log(fluxoCaixa)

// função
function somarFluxo(valor1, valor2) {
    resultadoFluxo = valor1 - valor2
    if(resultadoFluxo > 0) {
        console.log(`Saldo positivo, R$${resultadoFluxo},00`)
    } else if(resultadoFluxo == 0) {
        console.log(`Saldo zerado, R$${resultadoFluxo},00`)
    } else if(resultadoFluxo < 0) {
        console.log(`Saldo negativo, -R$${resultadoFluxo},00`)
    } else {
        console.log(`Dado inválido`)
    }

    return resultadoFluxo
}

somarFluxo(receitas, despesas)



// ----------------------------- Resolução

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

// estrutura de repetição para somar
function sum(array) {
    let total = 0;
    for(let value of array)
        total += value
    return total
}

// estrutura de repetição para calcular
function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()

