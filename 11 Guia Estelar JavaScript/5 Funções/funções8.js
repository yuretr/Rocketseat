// Callback function

function sayMyName(name) {
    console.log(name)
}

sayMyName('Yure')
sayMyName(2)
sayMyName({name: 'Yure'})

// ----------------------------------

function sayMyName2(name2) {
    console.log('antes da Callback')
    name2()   // executando uma função dentro dessa função
    console.log('depois da Callback')
}

sayMyName2(() =>{
    console.log('estou em uma Callback')
})

// Uma callback function é uma função que está sendo passada para outra função como parâmetro.

